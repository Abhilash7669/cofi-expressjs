import { redisClient } from "../../utils/redisClient.js";

export const redis = {
    check: async function (req, res, next) {
        if (!redisClient.isOpen) await redisClient.connect();
        next();
    },
    dataCheck: function (name) {
        return async (req, res, next) => {
            try {
                const data = await redisClient.get(name);
                if (data !== null) return res.send(JSON.parse(data));
                next();
            } catch (error) {
                console.error("Redis error:", error);
                res.status(500).send("Internal Server Error");
            }
        }
    },
    errorCheck: function(req, res, next)  {
        redisClient.on("error", (err) => console.error(err));
        next();
    }
}