import guardianAPI from "../services/guardianAPI"
import caseValidation from "../utils/caseValidation"
import logger from "../utils/logger"
import generateRss  from "../utils/rss"


exports.getArticle = async (req: any, res: any) => {

    if(!caseValidation(req.params.article)) {
        res.status(202).send({ message: 'Please recheck your section case! '})
    } else {
        try{
            const guardianRes = await guardianAPI(req.params.article)
            const rssData     = await generateRss(guardianRes.data.response);
            logger.info(guardianRes.data.response)
            res.set('content-type', 'text/xml');   
            res.status(200).send(rssData);
        } catch (e: any) {
            logger.error(e)
            res.status(422).json({ 'Error Message' : e.message});
        }
    }
}

