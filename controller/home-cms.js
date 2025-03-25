import { HeroCMS } from "../models/hero-cms.js"
import { redisClient } from "../utils/redisClient.js";

export const heroCMS = {
    getHeroContent: async function (req, res) {

        const data = await HeroCMS.findOne();
        if (data) {
            await redisClient.setEx("hero", 3600, JSON.stringify(data));
            return res.json(data);
        }
    }
}
