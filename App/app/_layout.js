import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        regular: require("../assets/fonts/Pretendard-Regular.ttf"),
        medium: require("../assets/fonts/Pretendard-Medium.ttf"),
        semibold: require("../assets/fonts/Pretendard-SemiBold.ttf"),
        bold: require("../assets/fonts/Pretendard-Bold.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
