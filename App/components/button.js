import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, PADDING } from "../constants/theme";

const FullButton = ({ text, onPress }) => {
    return (
        <View style={{ marginBottom: SIZES.l3 }}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.fullButton}
                onPress={onPress}
            >
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    fullButton: {
        justifyContent: "center",
        alignItems: "center",
        padding: SIZES.l4 + 2,
        paddingLeft: SIZES.l6,
        paddingRight: SIZES.l6åß,
        backgroundColor: COLORS.black,
        borderRadius: SIZES.l10,
    },
    text: {
        color: COLORS.white,
        fontSize: SIZES.l4,
        fontFamily: "bold",
    },
});

export { FullButton };
