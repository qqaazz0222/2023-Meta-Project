import { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, FONTS, SIZES } from "../constants/theme";

const Main = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    header: () => <></>,
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.l4,
                        backgroundColor: "red",
                    }}
                >
                    <Link href="/sign">로그인</Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Main;
