import { useState, useEffect } from "react";
import { Text, View, SafeAreaView, Appearance, StyleSheet } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { Title, SubTitle } from "../components/text";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { BackButton, FullButton } from "../components/button";
import { Pedometer } from "expo-sensors";
import { ICON8 } from "../assets/images/images";
import { TwoCard } from "../components/card";

const Pedo = () => {
    const [isPedometerAvailable, setIsPedometerAvailable] =
        useState("checking");
    const [pastStepCount, setPastStepCount] = useState(0);
    const [currentStepCount, setCurrentStepCount] = useState(0);

    const _subscribe = async () => {
        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(String(isAvailable));

        if (isAvailable) {
            const end = new Date();
            const start = new Date();
            start.setDate(end.getDate() - 1);

            const pastStepCountResult = await Pedometer.getStepCountAsync(
                start,
                end
            );
            if (pastStepCountResult) {
                setPastStepCount(pastStepCountResult.steps);
            }

            return Pedometer.watchStepCount((result) => {
                setCurrentStepCount(result.steps);
            });
        }
    };
    useEffect(() => {
        const subscription = _subscribe();
        return () => subscription;
    }, []);
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
                <Title text={"걸음수 센서"} />
                <SubTitle text={"사용 가능 : " + isPedometerAvailable} />
                <TwoCard
                    icon={[ICON8, ICON8]}
                    text={["실시간 걸음수", "24시간 걸음수"]}
                    val={[currentStepCount, pastStepCount]}
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
    },
    text: {
        marginBottom: SIZES.dp2,
        fontSize: SIZES.dp4,
    },
});

export default Pedo;
