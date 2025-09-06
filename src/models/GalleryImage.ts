import { Schema, models, model } from "mongoose";
const GalleryImageSchema = new Schema({ url: { type: String, required: true }, alt: { type: String, default: "" } }, { timestamps: true });
export default models.GalleryImage || model("GalleryImage", GalleryImageSchema);