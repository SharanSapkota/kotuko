import guardianAPI from "../services/guardianAPI"
import generateRss  from "../utils/rss"

const axios = require('axios')
require('dotenv').config('../../.env')

exports.getArticle = async (req: any, res: any) => {
    try{
        const guardianRes = await guardianAPI(req.params.article)
        const rssData = await generateRss(guardianRes.data.response);
        res.set('content-type', 'text/xml');    
        res.status(200).send(rssData);
} catch (e: any) {
    res.status(422).json({ 'Error Message' : e.message});}
}

