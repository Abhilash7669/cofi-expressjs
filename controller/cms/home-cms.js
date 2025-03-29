import { HeroCMS } from "../../models/cms/hero-cms.js"

export const heroCMS = {
    getHeroContent: async function (req, res) {
        const m_data = await HeroCMS.findOne();
        if (m_data) return m_data;
    }
}
