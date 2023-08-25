const dynamoDB = require("../bin/aws");

// [기록] 기록 목록 조회
const ReadHistoryList = async (email) => {
    console.log(email);
    const params = {
        TableName: "metaProjectLog",
        KeyConditionExpression: "dataType = :dataType",
        FilterExpression: "email = :email",
        ExpressionAttributeValues: {
            ":dataType": "LogKey",
            ":email": email,
        },
    };

    try {
        const data = await dynamoDB.query(params).promise();
        return data.Items;
    } catch (err) {
        console.error(
            "Unable to read item. Error JSON:",
            JSON.stringify(err, null, 2)
        );
        return null;
    }
};

// [기록] 기록 목록 조회
const ReadHistoryDetail = async (id) => {
    console.log(id);
    const params = {
        TableName: "metaProjectLog",
        KeyConditionExpression: "dataType = :dataType",
        ExpressionAttributeValues: {
            ":dataType": id,
        },
    };
    console.log(params);
    try {
        const data = await dynamoDB.query(params).promise();
        console.log(data);
        return data.Items;
    } catch (err) {
        console.error(
            "Unable to read item. Error JSON:",
            JSON.stringify(err, null, 2)
        );
        return null;
    }
};

module.exports = { ReadHistoryList, ReadHistoryDetail };
