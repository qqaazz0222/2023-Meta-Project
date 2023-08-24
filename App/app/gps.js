import { useEffect, useState } from "react";
import { View, SafeAreaView, Appearance, StyleSheet } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { Title, SubTitle } from "../components/text";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { BackButton } from "../components/button";
import { Loading } from "../components/loading";

const Gps = () => {
    const getGPS = async () => {
        const locationData = await Location.getCurrentPositionAsync({
            accuracy: 5,
        });
        console.log(
            "[GPS SENSOR] latitude :",
            locationData.coords.latitude,
            "/ logitude :",
            locationData.coords.longitude
        );
        setLatitude(locationData.coords.latitude);
        setLongitude(locationData.coords.longitude);
    };

    useEffect(() => {
        Appearance.setColorScheme("light");
        getGPS();
    }, []);
    const [latitude, setLatitude] = useState(0.0);
    const [longitude, setLongitude] = useState(0.0);
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    header: () => <></>,
                }}
            />
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    borderBottomColor: COLORS.gray1,
                    borderBottomWidth: 1,
                    zIndex: 100,
                }}
            >
                <View style={styles.mainView}>
                    <BackButton />
                    <Title text={"GPS 센서"} />
                    <SubTitle
                        text={
                            "아래 지도에서 현재 위치가 표시되는지 확인하세요."
                        }
                    />
                </View>
            </SafeAreaView>
            {latitude !== 0.0 && longitude !== 0.0 ? (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude,
                        }}
                    />
                </MapView>
            ) : (
                <Loading text={"GPS 데이터를 불러오는 중입니다."} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        minHeight: 160,
        height: SIZES.dp16,
        padding: SIZES.dp6,
        backgroundColor: COLORS.white,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});

export default Gps;
