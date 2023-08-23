import { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { Stack, Link, useRouter } from "expo-router";
import { COLORS, SIZES } from "../constants/theme";
import { Title, SubTitle, ErrText } from "../components/text";
import { InputText } from "../components/input";
import { FullButton } from "../components/button";
import { ApiSignIn } from "../api/signApi";
import { useNavigation } from "@react-navigation/native";

const Sign = () => {
    const navigation = useNavigation();
    // const router = useRouter();
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [err, setErr] = useState("");
    const SignIn = async () => {
        const res = await ApiSignIn(id, pw);
        if (res.state === 200) {
            setErr("");
            console.log("로그인 성공");
            navigation.navigate("index");
        } else {
            console.log("로그인 실패");
            setErr(res.msg);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    header: () => <></>,
                }}
            />
            <View style={{ flex: 1, padding: SIZES.l6 }}>
                <Title text={"환영합니다."} />
                <SubTitle
                    text={"서비스를 이용하기시기 위해 로그인이 필요합니다."}
                />
                {err ? <ErrText text={err} /> : <></>}
                <InputText
                    placeholder={"이메일을 입력해주세요."}
                    setValue={setId}
                />
                <InputText
                    placeholder={"비밀번호를 입력해주세요."}
                    setValue={setPw}
                />
                <FullButton text={"로그인"} onPress={SignIn} />
                {/* <Link href="/">홈으로</Link> */}
            </View>
        </SafeAreaView>
    );
};

export default Sign;
