import { useState, useEffect } from "react";
import {
    View,
    Text,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Appearance,
    Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { Title, SubTitle, ErrText } from "../components/text";
import { SpacerAuto } from "../components/spacer";
import { TwoTwoButton } from "../components/button";
import { ICON1, ICON2, ICON3, ICON4 } from "../assets/images/images";

const Main = () => {
    const navigation = useNavigation();
    const [uid, setUid] = useState("");
    useEffect(() => {
        if (uid === "") {
            navigation.navigate("signin");
        }
    }, []);
    const [location, setLocation] = useState();
    const [ok, setOk] = useState(true);
    const ask = async () => {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) {
            setOk(false);
        }
    };
    useEffect(() => {
        ask();
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
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: SIZES.dp6 }}>
                    <Title text={"기능 목록"} colorScheme={"dark"} />
                    <SubTitle
                        text={"스마트폰의 센서값 측정하고 서버로 전송해보세요."}
                        colorScheme={"dark"}
                    />
                    <SpacerAuto />
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
                        navigation.navigate("setting");
                    }}
                />
                <SpacerAuto />
            </View>
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
