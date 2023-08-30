import { useEffect, useState, useContext } from "react";
import {
    View,
    SafeAreaView,
    Appearance,
    StyleSheet,
    ScrollView,
} from "react-native";
import { Stack } from "expo-router";
import { CodeText, SubTitleNM, Title } from "../components/text";
import { COLORS, Margin, SIZES } from "../constants/theme";
import { SpacerAuto } from "../components/spacer";
import { BackButton, FullButton } from "../components/button";
import {
    ApiCheckServer,
    ApiSendStartSignal,
    ApiSendSensorData,
} from "../api/analyticsApi";
import { UserContext } from "../context/userContext";
import * as Location from "expo-location";
import { Gyroscope, Accelerometer, Pedometer } from "expo-sensors";

const Analytics = () => {
    const { userData, setUserData } = useContext(UserContext);
    const [isMeasuring, setIsMeasuring] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [logs, setLogs] = useState([]);
    let logArr = [];
    const [logView, setLogView] = useState();
    const [logKey, setLogKey] = useState("");
    const CheckConnection = async () => {
        const data = await ApiCheckServer();
        setLogs([...logs, data.msg]);
        return data;
    };
    const SendStartSignal = async () => {
        const data = await ApiSendStartSignal(userData.email);
        return data;
    };
    const SendSenorData = async () => {
        console.log(gyroData, aclrData);
        const key = logKey;
        const gps = { latitude: latitude, longitude: longitude };
        const gyro = { x: gyroData.x, y: gyroData.y, z: gyroData.y };
        const aclr = aclrData;
        const step = {
            currentStepCount: currentStepCount,
            pastStepCount: pastStepCount,
        };
        const data = await ApiSendSensorData(key, gps, gyro, aclr, step);
        logArr.push(data.msg);
        setLogs([...logs, ...logArr]);
        if (data.state !== 200) {
            setIsSending(false);
        }
        return data;
    };
    const StartMeasuring = async () => {
        const state = await CheckConnection();
        if (state.state === 200) {
            const key = await SendStartSignal();
            setLogs([...logs, `서버가 정상적으로 동작중입니다. : ${key}`]);
            setLogKey(key);
            setIsSending(true);
        }
    };
    useEffect(() => {
        // 설정된 시간 간격마다 setInterval 콜백이 실행된다.
        const timer = setInterval(() => {
            SendSenorData();
        }, 1000);

        if (isSending === false) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isSending]);
    useEffect(() => {
        getGPS();
        const subscription = _subscribePedo();
        return () => subscription;
        Appearance.setColorScheme("light");
    }, []);
    useEffect(() => {
        if (isMeasuring) {
            logArr = [];
            setLogs([]);
            StartMeasuring();
        } else {
            setLogs([...logs, "측정을 종료하였습니다."]);
            setIsSending(false);
        }
    }, [isMeasuring]);

    //[GPS]
    const getGPS = async () => {
        const locationData = await Location.getCurrentPositionAsync({
            accuracy: 5,
        });
        setLatitude(locationData.coords.latitude);
        setLongitude(locationData.coords.longitude);
    };
    const [latitude, setLatitude] = useState(0.0);
    const [longitude, setLongitude] = useState(0.0);
    //GYRO
    const [gyroData, setGyroData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscriptionGyro, setSubscriptionGyro] = useState(null);
    const _subscribeGyro = () => {
        setSubscriptionGyro(
            Gyroscope.addListener((gyroscopeData) => {
                console.log(gyroscopeData);
                setGyroData(gyroscopeData);
            })
        );
    };
    const _unsubscribeGyro = () => {
        subscriptionGyro && subscriptionGyro.remove();
        setSubscriptionGyro(null);
    };
    useEffect(() => {
        if (isMeasuring) {
            _subscribeGyro();
            _subscribeAclr();
        } else {
            _unsubscribeGyro();
            _unsubscribeAclr();
            setGyroData({ x: 0, y: 0, z: 0 });
            setAclrData({ x: 0, y: 0, z: 0 });
        }
    }, [isMeasuring]);
    //ACCELER
    const [aclrData, setAclrData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscriptionAclr, setSubscriptionAclr] = useState(null);
    const _subscribeAclr = () => {
        setSubscriptionAclr(Accelerometer.addListener(setAclrData));
    };

    const _unsubscribeAclr = () => {
        subscriptionAclr && subscriptionAclr.remove();
        setSubscriptionAclr(null);
    };
    //PEDO
    const [isPedometerAvailable, setIsPedometerAvailable] =
        useState("checking");
    const [pastStepCount, setPastStepCount] = useState(0);
    const [currentStepCount, setCurrentStepCount] = useState(0);

    const _subscribePedo = async () => {
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
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.black },
                    headerShadowVisible: false,
                    header: () => <></>,
                }}
            />
            <View style={styles.headerView}>
                <BackButton />
                <Title text={"측정"} />
                <SubTitleNM text={"스마트폰의 센서값을 서버로 전송합니다."} />
            </View>

            <View style={{ flex: 1, padding: SIZES.dp6 }}>
                <ScrollView
                    style={{
                        flex: 1,
                        padding: SIZES.dp5,
                        backgroundColor: COLORS.black,
                        borderRadius: SIZES.dp6,
                    }}
                >
                    {logs.map((item, idx) => {
                        return idx === 0 ? (
                            <View key={idx}></View>
                        ) : (
                            <CodeText
                                key={idx}
                                text={`[${idx}] ${item}`}
                                colorScheme={"dark"}
                            />
                        );
                    })}
                </ScrollView>
            </View>

            <View
                style={{
                    paddingLeft: SIZES.dp6,
                    paddingRight: SIZES.dp6,
                }}
            >
                <FullButton
                    text={isMeasuring ? "측정 종료" : "측정 시작"}
                    onPress={() => {
                        setIsMeasuring(!isMeasuring);
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerView: {
        padding: SIZES.dp6,
        backgroundColor: COLORS.white,
        marginTop: Margin.safeAreaMargin,
    },
});

export default Analytics;
