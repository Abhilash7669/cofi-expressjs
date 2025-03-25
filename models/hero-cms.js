import { model, Schema } from "mongoose";

const heroSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

export const HeroCMS = model("Hero", heroSchema, "hero");

