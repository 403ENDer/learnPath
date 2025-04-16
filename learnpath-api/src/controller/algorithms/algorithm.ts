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
    completedTopics: string[],
    balanceTopics: string[],
    targetLevel: number
  ): RoadmapResult {
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

    const completedTopicObjects = domainTopics
      .filter((topic) => completedTopics.includes(topic.id))
      .map((topic) => ({ ...topic }));

    const remainingTopics = domainTopics.filter(
      (topic) =>
        !completedTopics.includes(topic.id) &&
        !balanceTopics.includes(topic.id) &&
        topic.difficulty <= targetLevel
    );

    const allPaths: RoadmapResult[] = [];

    const buildPaths = (
      currentPath: TopicNode[],
      remaining: TopicNode[],
      currentValue: number,
      currentDifficulty: number
    ) => {
      allPaths.push({
        path: [...currentPath],
        totalValue: currentValue,
        difficulty: currentDifficulty,
      });

      for (let i = 0; i < remaining.length; i++) {
        const topic = remaining[i];

        const prerequisitesMet = topic.prerequisites.every(
          (prereq) =>
            completedTopics.includes(prereq) ||
            currentPath.some((t) => t.id === prereq)
        );

        if (prerequisitesMet) {
          const newRemaining = remaining.filter((_, index) => index !== i);
          const topicValue = this.calculateTopicValue(topic);

          buildPaths(
            [...currentPath, topic],
            newRemaining,
            currentValue + topicValue,
            currentDifficulty + topic.difficulty
          );
        }
      }
    };

    // Start building paths with completed topics
    const initialValue = completedTopicObjects.reduce(
      (sum, topic) => sum + this.calculateTopicValue(topic),
      0
    );
    const initialDifficulty = completedTopicObjects.reduce(
      (sum, topic) => sum + topic.difficulty,
      0
    );

    buildPaths(
      [...completedTopicObjects],
      remainingTopics,
      initialValue,
      initialDifficulty
    );

    // Find path with maximum value
    if (allPaths.length === 0) {
      return {
        path: [...completedTopicObjects],
        totalValue: initialValue,
        difficulty: initialDifficulty,
      };
    }

    return allPaths.reduce((best, current) => best);
  }
}
