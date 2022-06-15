import Router from 'express';
const {getArticle}  = require('../controllers/article.ts');

const router   = Router();

router.get('/:article', getArticle);

export default router;