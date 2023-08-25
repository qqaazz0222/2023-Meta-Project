import axios from "axios";
import { API } from "@env";

const ApiReceiveHistoryList = async (email) => {
    try {
        const data = await axios.post(API + "history", { email: email });
        // console.log("[ApiReceiveHistoryList]", data.data);
        return { state: 200, msg: "데이터 수신 성공", data: data.data };
    } catch (err) {
        return { state: 404, msg: "서버와 연결할 수 없습니다." };
    }
};

const ApiReceiveHistoryDetail = async (id) => {
    try {
        const data = await axios.post(API + "history/detail", { id: id });
        // console.log("[ApiReceiveHistoryDetail]", data.data);
        return { state: 200, msg: "데이터 수신 성공", data: data.data };
    } catch (err) {
        return { state: 404, msg: "서버와 연결할 수 없습니다." };
    }
};

export { ApiReceiveHistoryList, ApiReceiveHistoryDetail };
