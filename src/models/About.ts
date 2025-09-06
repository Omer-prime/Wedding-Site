import { Schema, model, models, type Model, type InferSchemaType } from "mongoose";

const AboutSchema = new Schema(
  {
    title: { type: String, default: "About Our Style" },
    content: { type: String, default: "" },
  },
  { timestamps: true }
);

export type IAbout = InferSchemaType<typeof AboutSchema>;
const About: Model<IAbout> = (models.About as Model<IAbout>) || model<IAbout>("About", AboutSchema);
export default About;
