import { useEffect } from "react";
import { View, SafeAreaView, Appearance, StyleSheet } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../components/text";
import { COLORS, Margin, SIZES } from "../constants/theme";

const Setting = () => {
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
                <Title text={"설정페이지"} />
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

export default Setting;
