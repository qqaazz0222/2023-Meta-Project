import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const Title = ({ text, colorScheme }) => {
    return (
        <View>
            <Text
                style={
                    colorScheme === "dark"
                        ? stylesDark.title
                        : stylesLight.title
                }
            >
                {text}
            </Text>
        </View>
    );
};

const SubTitle = ({ text, colorScheme }) => {
    return (
        <View>
            <Text
                style={
                    colorScheme === "dark"
                        ? stylesDark.subTitle
                        : stylesLight.subTitle
                }
            >
                {text}
            </Text>
        </View>
    );
};

const SubTitleNM = ({ text, colorScheme }) => {
    return (
        <View>
            <Text
                style={
                    colorScheme === "dark"
                        ? stylesDark.subTitleNM
                        : stylesLight.subTitleNM
                }
            >
                {text}
            </Text>
        </View>
    );
};

const ContentTitle = ({ text, colorScheme }) => {
    return (
        <View>
            <Text
                style={
                    colorScheme === "dark"
                        ? stylesDark.contentTitle
                        : stylesLight.contentTitle
                }
            >
                {text}
            </Text>
        </View>
    );
};

const ErrText = ({ text, colorScheme }) => {
    return (
        <View>
            <Text
                style={
                    colorScheme === "dark"
                        ? stylesDark.errText
                        : stylesLight.errText
                }
            >
                {text}
            </Text>
        </View>
    );
};

const CodeText = ({ text, colorScheme }) => {
    return (
        <View>
            <Text
                style={
                    colorScheme === "dark"
                        ? stylesDark.codeText
                        : stylesLight.codeText
                }
            >
                {text}
            </Text>
        </View>
    );
};
const stylesLight = StyleSheet.create({
    title: {
        marginBottom: SIZES.dp2,
        fontSize: SIZES.dp9,
        fontFamily: "bold",
        color: COLORS.black,
    },
    subTitle: {
        marginBottom: SIZES.dp8,
        fontSize: SIZES.dp4,
        fontFamily: "regular",
        color: COLORS.gray4,
    },
    subTitleNM: {
        fontSize: SIZES.dp4,
        fontFamily: "regular",
        color: COLORS.gray4,
    },
    contentTitle: {
        marginTop: SIZES.dp4,
        marginBottom: SIZES.dp2,
        fontSize: SIZES.dp7,
        fontFamily: "semibold",
        color: COLORS.gray6,
    },
    codeText: {
        marginBottom: SIZES.dp2,
        fontSize: SIZES.dp3,
        color: COLORS.black,
        textAlign: "left",
        fontFamily: "code",
    },
    errText: {
        marginBottom: SIZES.dp4,
        fontSize: SIZES.dp4,
        fontFamily: "medium",
        color: COLORS.danger,
        textAlign: "center",
    },
});

const stylesDark = StyleSheet.create({
    title: {
        marginBottom: SIZES.dp2,
        fontSize: SIZES.dp9,
        fontFamily: "bold",
        color: COLORS.white,
    },
    subTitle: {
        marginBottom: SIZES.dp8,
        fontSize: SIZES.dp4,
        fontFamily: "regular",
        color: COLORS.gray2,
    },
    subTitleNM: {
        fontSize: SIZES.dp4,
        fontFamily: "regular",
        color: COLORS.gray2,
    },
    contentTitle: {
        marginTop: SIZES.dp4,
        marginBottom: SIZES.dp2,
        fontSize: SIZES.dp7,
        fontFamily: "semibold",
        color: COLORS.gray0,
    },
    codeText: {
        marginBottom: SIZES.dp2,
        fontSize: SIZES.dp3,
        color: COLORS.white,
        textAlign: "left",
        fontFamily: "code",
    },
    errText: {
        marginBottom: SIZES.dp4,
        fontSize: SIZES.dp4,
        fontFamily: "medium",
        color: COLORS.danger,
        textAlign: "center",
    },
});

export { Title, SubTitle, SubTitleNM, ContentTitle, CodeText, ErrText };
