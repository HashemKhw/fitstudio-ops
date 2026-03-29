import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["trial", "demo", "contact"], required: true },
    gymName: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    name: { type: String },
    message: { type: String },
  },
  { timestamps: true },
);

export const Lead = mongoose.models.Lead ?? mongoose.model("Lead", leadSchema);
