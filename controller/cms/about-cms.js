import { AboutModel } from "../../models/cms/about-cms.js"


export const aboutCMS = {
    getAboutContent: async function (req, res) {
        const m_data = await AboutModel.findOne();

        if (m_data) return m_data;

    }
}