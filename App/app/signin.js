import { useState, useContext } from "react";
import {
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { Stack, Link, useRouter } from "expo-router";
import { COLORS, SIZES, Margin } from "../constants/theme";
import { Title, SubTitle, ErrText } from "../components/text";
import { InputText } from "../components/input";
import { FullButton } from "../components/button";
import { ApiSignIn } from "../api/signApi";
import { useNavigation } from "@react-navigation/native";
import { SpacerAuto } from "../components/spacer";
import { UserContext } from "../context/userContext";

// 캐시 저장소 값 불러오기
const getSecureStore = async (key) => {
    let result = await SecureStore.getItemAsync(key);
    return result;
};
// 캐시 저장소 값 설정
const setSecureStore = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
};
// 캐시 저장소 값 삭제
const delSecureStore = async (key) => {
    await SecureStore.deleteItemAsync(key);
};

const SignIn = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [err, setErr] = useState("");
    const InitState = () => {
        setEmail("");
        setPw("");
        setErr("");
    };
    const SignIn = async () => {
        const res = await ApiSignIn(email, pw);
        if (res.state === 200) {
            InitState();
            console.log("resData:", JSON.stringify(res.data));
            setSecureStore("email", res.data.email);
            setSecureStore("uname", res.data.name);
            Alert.alert("로그인 성공", `${res.data.name}님 환영합니다.`);
            navigation.reset({ routes: [{ name: "index" }] });
        } else {
            console.log("로그인 실패");
            setErr(res.msg);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    marginTop: Margin.safeAreaMargin,
                }}
            >
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: COLORS.white },
                        headerShadowVisible: false,
                        header: () => <></>,
                    }}
                />
                <View style={{ flex: 1, padding: SIZES.dp6 }}>
                    <Title text={"환영합니다."} />
                    <SubTitle
                        text={"서비스 이용을 위해 로그인이 필요합니다."}
                    />
                    <SpacerAuto />
                    {err ? <ErrText text={err} /> : <></>}
                    <View style={{ marginBottom: SIZES.dp4 }}>
                        <InputText
                            type={"emailAddress"}
                            placeholder={"이메일을 입력해주세요."}
                            value={email}
                            setValue={setEmail}
                        />
                        <InputText
                            type={"password"}
                            placeholder={"비밀번호를 입력해주세요."}
                            value={pw}
                            setValue={setPw}
                        />
                    </View>
                    <FullButton text={"로그인"} onPress={SignIn} />
                    <View>
                        <Link
                            href="/signup"
                            style={{ width: "100%", textAlign: "center" }}
                            onPress={InitState}
                        >
                            회원가입
                        </Link>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default SignIn;
