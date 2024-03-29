import { useState, useEffect, useContext } from "react";
import {
    View,
    Text,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Appearance,
    Image,
    TouchableOpacityComponent,
    Button,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import * as Location from "expo-location";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, Margin, SIZES } from "../constants/theme";
import { Title, SubTitle, ErrText } from "../components/text";
import { SpacerAuto } from "../components/spacer";
import { FullButton, TwoTwoButton } from "../components/button";
import { ICON1, ICON2, ICON3, ICON4 } from "../assets/images/images";
import { UserContext } from "../context/userContext";
import { OneCard } from "../components/card";

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

const Main = () => {
    const navigation = useNavigation();
    const [_userData, _setUserData] = useState(null);
    const { userData, setUserData } = useContext(UserContext);
    const [pedoData, setPedoData] = useState(0);
    const [uid, setUid] = useState("");
    const [location, setLocation] = useState();
    const [ok, setOk] = useState(true);
    const ask = async () => {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) {
            setOk(false);
        }
    };
    const getUserData = async () => {
        const cacheEmail = await getSecureStore("email");
        const cacheUname = await getSecureStore("uname");
        if (cacheEmail !== null && cacheUname !== null) {
            _setUserData({ email: cacheEmail, name: cacheUname });
            setUserData({ email: cacheEmail, name: cacheUname });
        }
    };
    const delUserData = async () => {
        await delSecureStore("email");
        await delSecureStore("uname");
        navigation.reset({ routes: [{ name: "signin" }] });
    };
    const getPedoData = async () => {
        const pedoData = await getSecureStore("pedo");
        setPedoData(parseInt(pedoData));
    };
    useEffect(() => {
        ask();
        getUserData();
        getPedoData();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.black },
                    headerShadowVisible: false,
                    header: () => <></>,
                }}
            />
            {_userData ? (
                <View style={{ flex: 1 }}>
                    <SafeAreaView
                        style={{ flex: 1, marginTop: Margin.safeAreaMargin }}
                    >
                        <View style={{ flex: 1, padding: SIZES.dp6 }}>
                            <Title text={"기능 목록"} colorScheme={"dark"} />

                            <SubTitle
                                text={
                                    "스마트폰의 센서값 측정하고 서버로 전송해보세요."
                                }
                                colorScheme={"dark"}
                            />
                            <SpacerAuto />
                            <OneCard
                                text={[
                                    "오늘의 미션",
                                    "3000보 걷기",
                                    `${pedoData}/3000`,
                                ]}
                                func={getPedoData}
                            />
                        </View>
                    </SafeAreaView>
                    <View style={styles.buttonWrap}>
                        <TwoTwoButton
                            icon={[ICON1, ICON2, ICON3, ICON4]}
                            text={["센서 점검", "측정", "기록", "설정"]}
                            onPress1={() => {
                                navigation.navigate("sensor");
                            }}
                            onPress2={() => {
                                navigation.navigate("analytics");
                            }}
                            onPress3={() => {
                                navigation.navigate("history");
                            }}
                            onPress4={() => {
                                // navigation.navigate("setting");
                                delUserData();
                            }}
                        />
                        <SpacerAuto />
                    </View>
                </View>
            ) : (
                <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                    <SafeAreaView
                        style={{ flex: 1, marginTop: Margin.safeAreaMargin }}
                    >
                        <View style={{ flex: 1, padding: SIZES.dp6 }}>
                            <Title text={"MetaProject."} />

                            <SubTitle
                                text={"로그인 후, 서비스를 이용해보세요."}
                            />
                        </View>
                        <SpacerAuto />
                        <View
                            style={{
                                paddingLeft: SIZES.dp6,
                                paddingRight: SIZES.dp6,
                            }}
                        >
                            <FullButton
                                text={"로그인하기"}
                                onPress={() => {
                                    navigation.reset({
                                        routes: [{ name: "signin" }],
                                    });
                                }}
                            />
                        </View>
                    </SafeAreaView>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonWrap: {
        padding: SIZES.dp6,
        paddingBottom: SIZES.dp10,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: SIZES.dp10,
        borderTopRightRadius: SIZES.dp10,
    },
});

export default Main;
