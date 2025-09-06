import { Schema, models, model } from "mongoose";
const NotificationSchema = new Schema({
  type: { type: String, enum: ["contact","gallery","system"], default: "system" },
  title: String, message: String, read: { type: Boolean, default: false }
}, { timestamps: true });
export default models.Notification || model("Notification", NotificationSchema);