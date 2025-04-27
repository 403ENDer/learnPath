import { Coursedata } from "../../public/data";

interface TopicNode {
  id: string;
  topic: string;
  rating: number;
  prerequisites: string[];
  industry_demand: number;
  difficulty: number;
  subtopics: {
    id: string;
    subtopic: string;
    url: string;
  }[];
}

interface RoadmapResult {
  path: TopicNode[];
  totalValue: number;
  difficulty: number;
}

export class RoadmapGenerator {
  private topicGraph: Map<string, TopicNode>;
  private topicIndex: Map<string, TopicNode>;

  constructor() {
    this.topicGraph = new Map();
    this.topicIndex = new Map();
    this.initializeGraph();
  }

  private initializeGraph() {
    for (const domain of Coursedata) {
      for (const submodule of domain.submodules) {
        for (const topic of submodule.topics) {
          const topicId = `${domain.id}-${submodule.id}-${topic.topic
            .toLowerCase()
            .replace(/\s+/g, "-")}`;
          const topicNode: TopicNode = {
            id: topicId,
            ...topic,
          };
          this.topicGraph.set(topicId, topicNode);
          this.topicIndex.set(topic.topic, topicNode);
        }
      }
    }
  }

  public generateRoadmap(domainId: string, targetLevel: number): RoadmapResult {
    const domain = Coursedata.find((d) => d.id === domainId);
    if (!domain) {
      throw new Error(`Domain ${domainId} not found`);
    }

    const domainTopics: TopicNode[] = [];
    for (const submodule of domain.submodules) {
      domainTopics.push(
        ...submodule.topics.map((topic) => ({
          id: `${domain.id}-${submodule.id}-${topic.topic
            .toLowerCase()
            .replace(/\s+/g, "-")}`,
          ...topic,
        }))
      );
    }

    const filteredTopics = domainTopics.filter(
      (topic) => topic.difficulty <= targetLevel
    );

    const dpTable = new Map<string, RoadmapResult>();

    for (const topic of filteredTopics) {
      if (topic.prerequisites.length === 0) {
        dpTable.set(topic.id, {
          path: [topic],
          totalValue: this.calculateTopicValue(topic),
          difficulty: topic.difficulty,
        });
      }
    }

    let updated = true;
    while (updated) {
      updated = false;
      for (const topic of filteredTopics) {
        if (topic.prerequisites.length === 0) continue;

        const allPrereqsMet = topic.prerequisites.every((prereq) => {
          const prereqNode = this.topicIndex.get(prereq);
          return prereqNode && dpTable.has(prereqNode.id);
        });

        if (allPrereqsMet) {
          let bestValue = -Infinity;
          let bestPath: TopicNode[] = [];
          let totalDifficulty = 0;

          for (const prereqName of topic.prerequisites) {
            const prereqNode = this.topicIndex.get(prereqName)!;
            const prereqResult = dpTable.get(prereqNode.id)!;
            const currentValue =
              prereqResult.totalValue + this.calculateTopicValue(topic);

            if (currentValue > bestValue) {
              bestValue = currentValue;
              bestPath = [...prereqResult.path, topic];
              totalDifficulty = prereqResult.difficulty + topic.difficulty;
            }
          }

          const currentBest = dpTable.get(topic.id);
          if (!currentBest || bestValue > currentBest.totalValue) {
            dpTable.set(topic.id, {
              path: bestPath,
              totalValue: bestValue,
              difficulty: totalDifficulty,
            });
            updated = true;
          }
        }
      }
    }

    let bestResult: RoadmapResult | null = null;
    for (const [_, result] of dpTable) {
      if (!bestResult || result.totalValue > bestResult.totalValue) {
        bestResult = result;
      }
    }

    return bestResult || { path: [], totalValue: 0, difficulty: 0 };
  }

  private calculateTopicValue(topic: TopicNode): number {
    const ratingWeight = 0.6;
    const demandWeight = 0.4;

    return topic.rating * ratingWeight + topic.industry_demand * demandWeight;
  }

  public reframeRoadmap(
    domainId: string,
    targetLevel: number,
    existingRoadmap: TopicNode[]
  ): RoadmapResult {
    let slots: number;
    if (targetLevel === 1) {
      slots = 3;
    } else if (targetLevel === 2) {
      slots = 2;
    } else {
      slots = Number.MAX_SAFE_INTEGER;
    }

    const domain = Coursedata.find((d) => d.id === domainId);
    if (!domain) {
      throw new Error(`Domain ${domainId} not found`);
    }

    // Flatten all topics in the domain
    const domainTopics: TopicNode[] = [];
    for (const submodule of domain.submodules) {
      domainTopics.push(
        ...submodule.topics.map((topic) => ({
          id: `${domain.id}-${submodule.id}-${topic.topic
            .toLowerCase()
            .replace(/\s+/g, "-")}`,
          ...topic,
        }))
      );
    }

    // Filter out topics already in existingRoadmap
    const existingTopicIds = new Set(existingRoadmap.map((t) => t.id));
    const candidateTopics = domainTopics.filter(
      (topic) => !existingTopicIds.has(topic.id)
    );

    if (slots === Number.MAX_SAFE_INTEGER) {
      const sortedCandidates = candidateTopics.sort(
        (a, b) => this.calculateTopicValue(b) - this.calculateTopicValue(a)
      );
      const newPath = [...existingRoadmap, ...sortedCandidates];
      const totalValue = newPath.reduce(
        (sum, t) => sum + this.calculateTopicValue(t),
        0
      );
      const totalDifficulty = newPath.reduce((sum, t) => sum + t.difficulty, 0);
      return {
        path: newPath,
        totalValue,
        difficulty: totalDifficulty,
      };
    }

    const n = candidateTopics.length;
    const W = slots;

    const dp: number[][] = Array(n + 1)
      .fill(0)
      .map(() => Array(W + 1).fill(0));

    // Keep track of choices
    const keep: boolean[][] = Array(n + 1)
      .fill(false)
      .map(() => Array(W + 1).fill(false));

    for (let i = 1; i <= n; i++) {
      const topic = candidateTopics[i - 1];
      const value = this.calculateTopicValue(topic);
      const weight = 1;

      for (let w = 0; w <= W; w++) {
        if (weight <= w) {
          if (dp[i - 1][w] < dp[i - 1][w - weight] + value) {
            dp[i][w] = dp[i - 1][w - weight] + value;
            keep[i][w] = true;
          } else {
            dp[i][w] = dp[i - 1][w];
          }
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }

    let w = W;
    const selectedTopics: TopicNode[] = [];
    for (let i = n; i > 0; i--) {
      if (keep[i][w]) {
        selectedTopics.push(candidateTopics[i - 1]);
        w -= 1;
      }
    }

    const newPath = [...existingRoadmap, ...selectedTopics.reverse()];
    const totalValue = newPath.reduce(
      (sum, t) => sum + this.calculateTopicValue(t),
      0
    );
    const totalDifficulty = newPath.reduce((sum, t) => sum + t.difficulty, 0);

    return {
      path: newPath,
      totalValue,
      difficulty: totalDifficulty,
    };
  }
}
