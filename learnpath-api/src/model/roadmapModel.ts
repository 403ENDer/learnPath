import mongoose, { Schema, Document } from "mongoose";

interface Roadmap extends Document {
  roadmap: any[];
}

const RoadmapSchema = new mongoose.Schema<Roadmap>({
  roadmap: [{ type: Schema.Types.Mixed }],
});

const RoadmapModel =
  mongoose.models.Roadmap || mongoose.model<Roadmap>("roadmaps", RoadmapSchema);

export default RoadmapModel;
