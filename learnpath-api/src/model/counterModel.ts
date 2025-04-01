import mongoose, { Schema, Document } from "mongoose";

interface Counter extends Document {
  _id: string;
  sequence_value: number;
}

const CounterSchema = new mongoose.Schema<Counter>({
  _id: { type: String, required: true },
  sequence_value: { type: Number, default: 0 },
});

const CounterModel =
  mongoose.models.Counter || mongoose.model<Counter>("counters", CounterSchema);

export default CounterModel;
