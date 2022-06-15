const xml = require('xml');
import { IGuardian, IResult } from "../interface/IGuardianResponse.interface";

const generateRss = (guardianData: IGuardian) =>{
    const xmlObject = {
        rsss: [
            {
                _attr: {
                    version: '2.0',
                    'xmlns:atom': 'http://www.w3.org/2005/Atom'
                }
            },
            {
                channel: [
                    { title: 'Localhost' },
                    { description: 'Guardian' },
                    { language: 'en-us' },
                    { managingEditor : 'sharan@gmail.com'},
                    { webMaster : 'sapkotarambbo@gmail.com'},
                    ...guardianData.results.map((result: IResult) => {
                        console.log(result)
                        return {
                            item: [
                                { title: result.webTitle },
                                { link: result.webUrl },
                                { pubDate: result.webPublicationDate }
                            ]
                        };
                    })
                ]
            }
        ]
    };
    return '<?xml version="1.0" encoding="UTF-8"?>' + xml(xmlObject);
};

export default generateRss