import express from "express";
import { heroCMS } from "../controller/home-cms.js";

const route = express.Router();
const PATH = "/";

route.get(PATH, heroCMS.getHeroContent);

export { route as homeRoute };