const dynamoDB = require("../bin/aws");

// [로그인] 비밀번호 일치 확인
const CheckPassword = async (email, pw) => {
    // [상태 코드 : state]
    // 200 : 로그인 성공
    // 201 : 사용자 없음
    // 202 : 비밀번호 불일치
    const params = {
        TableName: "metaProjectUser",
        KeyConditionExpression: "email = :email",
        ExpressionAttributeValues: {
            ":email": email,
        },
    };
    try {
        // 입력받은 이메일로 데이터베이스 조회
        const data = await dynamoDB.query(params).promise();
        // 입력받은 이메일과 일치하는 사용자 정보 없음
        if (data.Items.length === 0) {
            return { state: 201, msg: "등록되지 않은 사용자" };
        } else {
            // 입력 받은 이메일과 일치하는 사용자 정보가 있으며, 비밀번호가 일치함
            if (data.Items[0].password === pw) {
                return { state: 200, msg: "로그인 성공", data: data.Items[0] };
            }
            // 입력 받은 이메일과 일치하는 사용자 정보가 있으나, 비밀번호가 일치하지 않음
            else {
                return { state: 202, msg: "비밀번호 불일치" };
            }
        }
    } catch (err) {
        console.error(err);
        return null;
    }
};

// [회원가입] 사용 중 이메일 확인
const CheckAlreadyUsed = async (email) => {
    // [상태 코드 : state]
    // 200 : 로그인 성공
    // 201 : 사용중인 이메일
    const params = {
        TableName: "metaProjectUser",
        KeyConditionExpression: "email = :email",
        ExpressionAttributeValues: {
            ":email": email,
        },
    };
    try {
        const data = await dynamoDB.query(params).promise();
        if (data.Items.length === 0) {
            return { state: 200, msg: "회원가입 성공", data: data.Items[0] };
        } else {
            return { state: 201, msg: "사용중인 이메일", data: {} };
        }
    } catch (err) {
        console.error(err);
        return null;
    }
};

// [회원가입] 사용자 정보 등록
const CreateUserData = async (email, pw, name) => {
    const params = {
        TableName: "metaProjectUser",
        Item: {
            email: email,
            password: pw,
            name: name,
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

module.exports = { CheckAlreadyUsed, CheckPassword, CreateUserData };
