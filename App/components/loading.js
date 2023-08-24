import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const Loading = ({ text }) => {
    return (
        <View style={styles.loadingWrap}>
            <ActivityIndicator size="large" color={COLORS.white} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    loadingWrap: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.black,
        opacity: 0.8,
    },
    text: {
        marginTop: SIZES.dp3,
        color: COLORS.white,
    },
});

export { Loading };
