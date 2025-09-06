import mongoose, { type Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not set");
}

declare global {
  var __mongooseConn:
    | { conn: Mongoose | null; promise: Promise<Mongoose> | null }
    | undefined;
}

export async function dbConnect(): Promise<Mongoose> {
  if (!global.__mongooseConn) {
    global.__mongooseConn = { conn: null, promise: null };
  }
  if (global.__mongooseConn.conn) return global.__mongooseConn.conn;

  if (!global.__mongooseConn.promise) {
    global.__mongooseConn.promise = mongoose.connect(MONGODB_URI);
  }
  global.__mongooseConn.conn = await global.__mongooseConn.promise;
  return global.__mongooseConn.conn;
}
