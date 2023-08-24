import { useState } from "react";
import {
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from "react-native";
import { Stack, Link, useRouter } from "expo-router";
import { COLORS, SIZES } from "../constants/theme";
import { Title, SubTitle, ErrText } from "../components/text";
import { InputText } from "../components/input";
import { FullButton } from "../components/button";
import { ApiSignIn } from "../api/signApi";
import { useNavigation } from "@react-navigation/native";
import { SpacerAuto } from "../components/spacer";

const SignIn = () => {
    const navigation = useNavigation();
    // const router = useRouter();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [err, setErr] = useState("");
    const SignIn = async () => {
        const res = await ApiSignIn(email, pw);
        if (res.state === 200) {
            setErr("");
            console.log("로그인 성공");
            Alert.alert("로그인 성공", "홍길동님 환영합니다.");
            navigation.navigate("index");
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
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
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
                            placeholder={"이메일을 입력해주세요."}
                            setValue={setEmail}
                        />
                        <InputText
                            type={"pw"}
                            placeholder={"비밀번호를 입력해주세요."}
                            setValue={setPw}
                        />
                    </View>
                    <FullButton text={"로그인"} onPress={SignIn} />
                    <View>
                        <Link
                            href="/signup"
                            style={{ width: "100%", textAlign: "center" }}
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
