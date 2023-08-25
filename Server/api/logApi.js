const dynamoDB = require("../bin/aws");
const { v4: uuidv4 } = require("uuid");

// [로그] 로그키 생성
const CreateLogKey = async (id, date) => {
    const uuid = uuidv4();
    const params = {
        TableName: "metaProjectLog",
        Item: {
            dataType: "LogKey",
            date: date,
            email: id,
            id: uuid,
        },
    };
    try {
        const data = await dynamoDB.put(params).promise();
        return uuid;
    } catch (err) {
        console.error(err);
        return null;
    }
};

// [로그] 로그데이터 생성
const CreateLogData = async (key, date, gps, gyro, aclr, pedo) => {
    const params = {
        TableName: "metaProjectLog",
        Item: {
            dataType: key,
            date: date,
            gps: gps,
            gyro: gyro,
            aclr: aclr,
            pedo: pedo,
        },
    };
    try {
        const data = await dynamoDB.put(params).promise();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
};

module.exports = { CreateLogKey, CreateLogData };
