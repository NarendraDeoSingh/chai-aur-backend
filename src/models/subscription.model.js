import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
  subsscriber: {
    type: Schema.Types.ObjectId, // one who os subscribing
    ref: "User",
  },
  channel: {
    type: Schema.Types.ObjectId, // one who to whom subscribing
    ref: "User",
  },
});

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
