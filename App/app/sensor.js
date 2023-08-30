import { useEffect } from "react";
import { View, SafeAreaView, Appearance, StyleSheet } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { SubTitle, Title } from "../components/text";
import { COLORS, FONTS, Margin, SIZES } from "../constants/theme";
import { BackButton, TwoTwoButton } from "../components/button";
import { ICON5, ICON6, ICON7, ICON8 } from "../assets/images/images";

const Sensor = () => {
    const navigation = useNavigation();
    useEffect(() => {
        Appearance.setColorScheme("light");
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.black },
                    headerShadowVisible: false,
                    header: () => <></>,
                }}
            />
            <View style={styles.mainView}>
                <BackButton />
                <Title text={"센서 점검"} />
                <SubTitle text={"사용 가능한 센서를 확인해보세요."} />
                <TwoTwoButton
                    icon={[ICON5, ICON6, ICON7, ICON8]}
                    text={[
                        "GPS 센서",
                        "자이로 센서",
                        "가속도 센서",
                        "걸음수 센서",
                    ]}
                    onPress1={() => {
                        navigation.navigate("gps");
                    }}
                    onPress2={() => {
                        navigation.navigate("gyro");
                    }}
                    onPress3={() => {
                        navigation.navigate("acceler");
                    }}
                    onPress4={() => {
                        navigation.navigate("pedo");
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: SIZES.dp6,
        backgroundColor: COLORS.white,
        marginTop: Margin.safeAreaMargin,
    },
});

export default Sensor;
