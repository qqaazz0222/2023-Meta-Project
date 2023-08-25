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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        maxHeight: "100%",
        backgroundColor: COLORS.black,
        opacity: 0.5,
    },
    text: {
        marginTop: SIZES.dp3,
        color: COLORS.white,
    },
});

export { Loading };
