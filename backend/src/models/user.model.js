import mongoose from "mongoose";
import { StrictMode } from "react";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
      // unique: true,
    },
    clerkId: {
      type: StrictMode,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
// ceatedAt, updateAt

export const User = mongoose.model("User", userSchema);
