import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  year: { type: String, required: true }, // e.g., "Second Year"
  examType: { type: String, required: true }, // e.g., "ISE-2"
  fileUrl: { type: String, required: true }, // Cloud storage or local path
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Note", noteSchema);
