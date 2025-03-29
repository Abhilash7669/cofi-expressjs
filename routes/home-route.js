import express from "express";
import { redis } from "../middleware/redis/redisCheck.js";
import { commonCMSController } from "../controller/cms/common-cms.js";

const route = express.Router();
const PATH = "/";

route.get(PATH, redis.dataCheck("homepage"), commonCMSController.fetchContent);

export { route as homeRoute };
