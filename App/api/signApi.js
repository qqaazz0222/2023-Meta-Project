const ApiSignIn = async (email, pw) => {
    let data = {
        state: 0,
        msg: "",
        data: [],
    };
    if (email !== "" && pw !== "") {
        data.state = 200;
        data.msg = "로그인 성공";
        data.data = [
            {
                email: email,
                password: pw,
                name: "홍길동",
            },
        ];
    } else {
        data.state = 201;
        data.msg = "로그인 실패";
    }
    return data;
};

const ApiSignUp = async (email, pw, pwConfirm, name) => {
    let data = {
        state: 0,
        msg: "",
        data: [],
    };
    const tempEmail = "test@test.com";
    if (email !== "" && pw !== "" && pw === pwConfirm && name !== "") {
        data.state = 200;
        data.msg = "회원가입 성공";
        data.data = [
            {
                email: email,
                password: pw,
                name: "홍길동",
                eMail: "email@domain.com",
            },
        ];
    } else if (email === "") {
        data.state = 201;
        data.msg = "이메일을 입력하지 않았습니다.";
    } else if (pw === "") {
        data.state = 202;
        data.msg = "비밀번호를 입력하지 않았습니다.";
    } else if (pw === pwConfirm) {
        data.state = 203;
        data.msg = "비밀번호가 일치하지 않습니다.";
    } else if (name === "") {
        data.state = 204;
        data.msg = "이름을 입력하지 않았습니다.";
    } else if (email === tempEmail) {
        data.state = 205;
        data.msg = "사용중인 이메일입니다.";
    }
    return data;
};

export { ApiSignIn, ApiSignUp };
