import { useState, useEffect } from "react";
import { Text, View, SafeAreaView, Appearance, StyleSheet } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { Title, SubTitle, ContentTitle } from "../components/text";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { BackButton, FullButton } from "../components/button";
import { Gyroscope } from "expo-sensors";
import { ThreeCard } from "../components/card";
import { ICON6 } from "../assets/images/images";
const Gyro = () => {
    const [isTesting, setIsTesting] = useState(false);
    const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState(null);
    const _slow = () => Gyroscope.setUpdateInterval(1000);
    // const _fast = () => Gyroscope.setUpdateInterval(16);
    const _subscribe = () => {
        setSubscription(
            Gyroscope.addListener((gyroscopeData) => {
                console.log(gyroscopeData);
                setData(gyroscopeData);
            })
        );
    };
    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };
    useEffect(() => {
        if (isTesting) {
            _subscribe();
        } else {
            _unsubscribe();
            setData({ x: 0, y: 0, z: 0 });
        }
    }, [isTesting]);

    useEffect(() => {
        Appearance.setColorScheme("light");
    }, []);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.black },
                    headerShadowVisible: false,
                    header: () => <></>,
                }}
            />
            <View style={styles.mainView}>
                <BackButton />
                <Title text={"자이로 센서"} />
                <SubTitle text={"아래 도형이 움직이는지 확인하세요."} />
                <ThreeCard
                    icon={[ICON6, ICON6, ICON6]}
                    text={["X", "Y", "Z"]}
                    val={[x.toFixed(2), y.toFixed(2), z.toFixed(2)]}
                />
                <ContentTitle text={"상세 정보"} />
                <Text style={styles.text}>X : {x}</Text>
                <Text style={styles.text}>Y : {y}</Text>
                <Text style={styles.text}>Z : {z}</Text>
            </View>
            <View style={{ paddingLeft: SIZES.dp6, paddingRight: SIZES.dp6 }}>
                <FullButton
                    text={isTesting ? "검사 종료" : "검사 시작"}
                    onPress={() => {
                        setIsTesting(!isTesting);
                    }}
                ></FullButton>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: SIZES.dp6,
        backgroundColor: COLORS.white,
    },
    text: {
        marginBottom: SIZES.dp2,
        fontSize: SIZES.dp4,
    },
});

export default Gyro;