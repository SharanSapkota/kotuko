import { caseRegex } from './regex';

const caseValidation = (article: any) => caseRegex.test(article)

export default caseValidation;