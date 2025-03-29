import { redisClient } from "../../utils/redisClient.js";
import { aboutCMS } from "./about-cms.js"
import { heroCMS } from "./home-cms.js"


export const commonCMSController = {

    fetchContent: async function (req, res) {
        const [m_hero, m_about] = await Promise.all([
            heroCMS.getHeroContent(),
            aboutCMS.getAboutContent()
        ]);

        const content = { hero: m_hero, about: m_about };

        await redisClient.setEx("homepage", 3600, JSON.stringify(content));

        return res.json(content);

    }

}