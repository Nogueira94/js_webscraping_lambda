const scrape_country = require('../../src/web_scrap')

// const AWS = require('aws-sdk');

const cases = scrape_country()

console.log(cases)


// AWS.config.update({region:"sa-east-1"});

// exports.handler = async (e, ctx) => {
//     const ddb = new AWS.DynamoDB({apiVersion: "2012-10-08"});
//     const documentClient = new AWS.DynamoDB.DocumentClient({region:"sa-east-1"})

//     const params = {
//         TableName: 'global',
//         Item:{            
//             cases:"teste" ,
//             deaths:"teste",
//             recover: "test"
//         }        
//     };

//     try {
//         const data = await documentClient.put(params).promise();
//         console.log(data);
//     } catch (err){
//         console.log(err);
//     }

// }