import axios from "axios";
// import { API } from "@env";
const API = "http://3.34.190.251:3000/";

const ApiSignIn = async (email, pw) => {
    if (email !== "" && pw !== "") {
        const data = await axios.post(API + "signin", {
            email: email,
            pw: pw,
        });
        if (data.data.state == 200) {
            console.log("[SignIn] Success!");
            console.log(data.data);
        }
        return data.data;
    } else if (email === "") {
        return { state: 400, msg: "이메일을 입력하지 않았습니다." };
    } else if (pw === "") {
        return { state: 400, msg: "비밀번호를 입력하지 않았습니다." };
    }
};

const ApiSignUp = async (email, pw, pwConfirm, name) => {
    if (email !== "" && pw !== "" && pw === pwConfirm && name !== "") {
        const data = await axios.post(API + "signup", {
            email: email,
            pw: pw,
            name: name,
        });
        if (data.data.state == 200) {
            console.log("[SignUp] Success!");
            console.log(data.data);
        }
        return data.data;
    } else if (email === "") {
        return { state: 400, msg: "이메일을 입력하지 않았습니다." };
    } else if (pw === "") {
        return { state: 400, msg: "비밀번호를 입력하지 않았습니다." };
    } else if (pw === pwConfirm) {
        return { state: 400, msg: "비밀번호가 일치하지 않습니다." };
    } else if (name === "") {
        return { state: 400, msg: "이름을 입력하지 않았습니다." };
    }
};

export { ApiSignIn, ApiSignUp };
