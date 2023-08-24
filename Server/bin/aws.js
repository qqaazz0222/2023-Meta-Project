const AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
    region: "ap-northeast-2",
    endpoint: "http://dynamodb.ap-northeast-2.amazonaws.com",
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoDB;
