import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema({
  console: {
    type: String,
    required: type,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Tweet = mongoose.model("Tweet", tweetSchema);
