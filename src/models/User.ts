import { Schema, model, models, type Model, type InferSchemaType } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
  },
  { timestamps: true }
);

export type IUser = InferSchemaType<typeof UserSchema>;
const User: Model<IUser> = (models.User as Model<IUser>) || model<IUser>("User", UserSchema);
export default User;
