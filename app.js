import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { MONGODB_URI } from "./utils/db.js";
import { HeroCMS } from "./models/hero-cms.js";
import { redis } from "./middleware/redis/redisCheck.js";

const PORT = 8080;
const app = express();



app.use(cors({
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200
}));

app.use(express.json());
app.use(redis.check);
app.use(redis.errorCheck);

app.get("/", (req, res) => {
  res.send({ message: "Welcome" });
})

// app.get("/", async (req, res) => {
//      console.log("HIT!");
//      const start = Date.now(); // Start timing

//      try {
//        const data = await redisClient.get("hero");

//        if (data !== null) {
//          console.log("CACHED DATA!");
//          console.log(`Response Time (Cache): ${Date.now() - start}ms`); // ✅ Show cached response time
//          return res.json(JSON.parse(data));
//        } else {
//          const getData = await HeroCMS.findOne();
//          if (getData) {
//            console.log("New data!");
//            await redisClient.setEx("hero", 3500, JSON.stringify(getData));
//            console.log(`Response Time (DB Query): ${Date.now() - start}ms`); // ✅ Show DB query response time
//            return res.json(getData);
//          }
//        }
//      } catch (error) {
//        console.error("Redis Error:", error);
//        res.status(500).send("Internal Server Error");
//      }
// });


app.get("/clear-cache", async (req, res) => {
  try {
    await redisClient.del("hero"); // Delete the key
    console.log("Cache cleared!");
    res.send("Cache cleared!");
  } catch (error) {
    console.error("Error clearing cache:", error);
    res.status(500).send("Error clearing cache");
  }
});



connect(MONGODB_URI)
  .then((result) =>
    app.listen(PORT, (req, res, next) => {
        console.log(`Listening to PORT: ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err, "eRROR");
  });
    