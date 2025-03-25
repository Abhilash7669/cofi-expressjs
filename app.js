import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { MONGODB_URI } from "./utils/db.js";
import { redis } from "./middleware/redis/redisCheck.js";
import { homeRoute } from "./routes/home-route.js";

const PORT = 8080;
const app = express();


app.use(cors({
  // origin: [ process.env.DEV_URL, "http://localhost:3000"],
  origin: ["*"],
  optionsSuccessStatus: 200
}));

app.use(express.json());
app.use(redis.check);
app.use(redis.errorCheck);


// routes
app.use(homeRoute);

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
    