const ApiSignIn = async (id, pw) => {
    let data = {
        state: 0,
        msg: "",
        data: [],
    };
    if (id !== "" && pw !== "") {
        data.state = 200;
        data.msg = "로그인 성공";
        data.data = [
            {
                id: id,
                password: pw,
                name: "홍길동",
                eMail: "email@domain.com",
            },
        ];
    } else {
        data.state = 201;
        data.msg = "로그인 실패";
    }
    return data;
};

const ApiSignUp = async (id, pw, data) => {
    return false;
};

export { ApiSignIn, ApiSignUp };
