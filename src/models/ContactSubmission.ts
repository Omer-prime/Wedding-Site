import { Schema, models, model } from "mongoose";
const ContactSubmissionSchema = new Schema({
  name: String, email: String, date: String, type: String, message: String, read: { type: Boolean, default: false }
}, { timestamps: true });
export default models.ContactSubmission || model("ContactSubmission", ContactSubmissionSchema);