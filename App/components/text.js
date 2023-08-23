import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const Title = ({ text }) => {
    return (
        <View>
            <Text style={styles.title}>{text}</Text>
        </View>
    );
};

const SubTitle = ({ text }) => {
    return (
        <View>
            <Text style={styles.subTitle}>{text}</Text>
        </View>
    );
};

const ErrText = ({ text }) => {
    return (
        <View>
            <Text style={styles.errText}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginBottom: SIZES.l2,
        fontSize: SIZES.l9,
        fontFamily: "bold",
        color: COLORS.black,
    },
    subTitle: {
        marginBottom: SIZES.l8,
        fontSize: SIZES.l4,
        fontFamily: "regular",
        color: COLORS.gray4,
    },
    errText: {
        marginBottom: SIZES.l4,
        fontSize: SIZES.l4,
        fontFamily: "medium",
        color: COLORS.danger,
        textAlign: "center",
    },
});

export { Title, SubTitle, ErrText };
