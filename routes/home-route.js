import express from "express";
import { redis } from "../middleware/redis/redisCheck.js";
import { commonCMSController } from "../controller/cms/common-cms.js";
import { matchedData, query, validationResult } from "express-validator";


const route = express.Router();
const PATH = "/";

route.get(PATH, redis.dataCheck("homepage"), commonCMSController.fetchContent);

route.get(`${PATH}hello`, query("person").notEmpty().escape(), (req, res) => {

    const result = validationResult(req);

    if (result.isEmpty()) {
        const data = matchedData(req);
        return res.send(`Hello, ${data.person}`);
    }

    res.send({ error: result.array() });
});

export { route as homeRoute };
