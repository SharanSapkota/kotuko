const axios = require('axios');

const guardianAPI = async (article: string) => {
    return await axios.get(`https://content.guardianapis.com/${article}`,{
    params: { 'api-key' : process.env.API_KEY}
}
)
}

  export default guardianAPI;