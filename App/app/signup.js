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
import { ApiSignUp } from "../api/signApi";
import { useNavigation } from "@react-navigation/native";
import { SpacerAuto } from "../components/spacer";

const SignUp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [pwConfirm, setPwConfirm] = useState("");
    const [name, setName] = useState("");
    const [err, setErr] = useState("");
    const InitState = () => {
        setEmail("");
        setPw("");
        setPwConfirm("");
        setName("");
        setErr("");
    };

    const SignIn = async () => {
        const res = await ApiSignUp(email, pw, pwConfirm, name);
        if (res.state === 200) {
            InitState();
            Alert.alert("회원가입 성공", "로그인 후, 서비스를 이용해보세요.");
            navigation.navigate("signin");
        } else {
            console.log("회원가입 실패");
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
                        text={"서비스 이용을 위해 회원가입이 필요합니다."}
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
                        <InputText
                            type={"pw"}
                            placeholder={"비밀번호를 한번 더 입력해주세요."}
                            setValue={setPwConfirm}
                        />
                        <InputText
                            placeholder={"이름을 입력해주세요."}
                            setValue={setName}
                        />
                    </View>
                    <FullButton text={"회원가입"} onPress={SignIn} />
                    <View>
                        <Link
                            href="/signin"
                            style={{
                                width: "100%",
                                textAlign: "center",
                            }}
                            onPress={InitState}
                        >
                            로그인
                        </Link>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default SignUp;
