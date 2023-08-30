import { useState, useCallback, useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { UserContext } from "../context/userContext";
import { HistoryContext } from "../context/historyContext";
import { StyleSheet } from "react-native";

SplashScreen.preventAutoHideAsync();
const Layout = () => {
    const [userData, setUserData] = useState(null);
    const [historyData, setHistoryData] = useState(null);
    const [fontsLoaded] = useFonts({
        regular: require("../assets/fonts/Pretendard-Regular.ttf"),
        medium: require("../assets/fonts/Pretendard-Medium.ttf"),
        semibold: require("../assets/fonts/Pretendard-SemiBold.ttf"),
        bold: require("../assets/fonts/Pretendard-Bold.ttf"),
        code: require("../assets/fonts/D2Coding.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            <HistoryContext.Provider value={{ historyData, setHistoryData }}>
                <Stack onLayout={onLayoutRootView} />
            </HistoryContext.Provider>
        </UserContext.Provider>
    );
    // return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
