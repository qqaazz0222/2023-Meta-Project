import axios from "axios";
// import { API } from "@env";
const API = "http://3.34.190.251:3000/";

const ApiCheckServer = async () => {
    try {
        const data = await axios.get(API);
        return data.data;
    } catch (err) {
        return { state: 404, msg: "서버와 연결할 수 없습니다." };
    }
};

const ApiSendStartSignal = async (id) => {
    const date = new Date();
    try {
        const data = await axios.post(API + "log/key", {
            id: id,
            date: date.toString(),
        });
        console.log("[createLogKey]", data.data);
        return data.data.data.uuid;
    } catch (err) {
        return { state: 404, msg: "서버와 연결할 수 없습니다." };
    }
};

const ApiSendSensorData = async (key, gps, gyro, aclr, step) => {
    const date = new Date();
    try {
        const data = await axios.post(API + "log/data", {
            key: key,
            date: date.toString(),
            gps: gps,
            gyro: gyro,
            aclr: aclr,
            step: step,
        });
        console.log("[ApiSendSensorData]", data.data);
        return data.data;
    } catch (err) {
        return { state: 404, msg: "서버와 연결할 수 없습니다." };
    }
};

export { ApiCheckServer, ApiSendStartSignal, ApiSendSensorData };
