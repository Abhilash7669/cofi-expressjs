import express from "express";
import { heroCMS } from "../controller/home-cms.js";
import { redis } from "../middleware/redis/redisCheck.js";

const route = express.Router();
const PATH = "/";

route.get(PATH, redis.dataCheck("hero"), heroCMS.getHeroContent);

export { route as homeRoute };