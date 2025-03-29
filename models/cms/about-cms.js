import { model, Schema } from "mongoose";


const AboutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export const AboutModel = model("About", AboutSchema, "about");