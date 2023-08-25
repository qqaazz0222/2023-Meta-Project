var express = require("express");
var router = express.Router();
const SignApi = require("../api/signApi");
const LogApi = require("../api/logApi");
const HistoryApi = require("../api/historyApi");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.json({ state: 200, msg: "서버가 정상적으로 동작중입니다." });
});

router.post("/signin", async (req, res, next) => {
    console.log(req.body);
    // [사용자 입력 데이터] email(String), pw(String)
    const { email, pw } = req.body;
    try {
        // [비밀번호 확인] 사용자가 입력한 정보를 검증하는 과정
        const CheckPassword = await SignApi.CheckPassword(email, pw);
        // [결과 반환] api/signApi.js
        console.log(CheckPassword);
        return res.json(CheckPassword);
    } catch (err) {
        console.error(err);
    }
});

router.post("/signup", async (req, res, next) => {
    // [사용자 입력 데이터] email(String), pw(String), name(String)
    const { email, pw, name } = req.body;
    try {
        // [사용중인 이메일 확인] 사용자가 입력한 이메일 사용 가능 여부를 검증하는 과정
        const checkAlreadyUsed = await SignApi.CheckAlreadyUsed(email);
        // [이메일 사용 가능]
        if (checkAlreadyUsed.state === 200) {
            // [사용자 추가]
            const createUserData = await SignApi.CreateUserData(
                email,
                pw,
                name
            );
        }
        // [결과 반환] api/signApi.js
        return res.json(checkAlreadyUsed);
    } catch (err) {
        console.error(err);
    }
});

router.post("/log/key", async (req, res, next) => {
    console.log(req.body);
    const { id, date } = req.body;
    try {
        const CreateLogKey = await LogApi.CreateLogKey(id, date);
        if (CreateLogKey !== null) {
            res.json({
                state: 200,
                msg: "서버가 정상적으로 데이터를 받았습니다.",
                data: { uuid: CreateLogKey },
            });
        } else {
            res.json({
                state: 201,
                msg: "로그키를 생성할 수 없습니다.",
            });
        }
    } catch (err) {
        console.error(err);
        return res.json({ state: 200, msg: "서버와 연결할 수 없습니다." });
    }
});

router.post("/log/data", async (req, res, next) => {
    console.log(req.body);
    const { key, date, gps, gyro, aclr, step } = req.body;
    try {
        const CreateLogData = await LogApi.CreateLogData(
            key,
            date,
            gps,
            gyro,
            aclr,
            step
        );
        if (CreateLogData !== null) {
            res.json({
                state: 200,
                msg: "서버가 정상적으로 데이터를 받았습니다.",
                data: [],
            });
        } else {
            res.json({
                state: 201,
                msg: "로그키를 생성할 수 없습니다.",
            });
        }
    } catch (err) {
        console.error(err);
        return res.json({ state: 404, msg: "서버와 연결할 수 없습니다." });
    }
});

router.post("/history", async (req, res, next) => {
    console.log(req.body);
    const { email } = req.body;
    try {
        const ReadHistoryList = await HistoryApi.ReadHistoryList(email);
        return res.json(ReadHistoryList);
    } catch (err) {
        console.error(err);
        return res.json({ state: 404, msg: "서버와 연결할 수 없습니다." });
    }
});

router.post("/history/detail", async (req, res, next) => {
    console.log(req.body);
    const { id } = req.body;
    try {
        const ReadHistoryDetail = await HistoryApi.ReadHistoryDetail(id);
        return res.json(ReadHistoryDetail);
    } catch (err) {
        console.error(err);
        return res.json({ state: 404, msg: "서버와 연결할 수 없습니다." });
    }
});

module.exports = router;
