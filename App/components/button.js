import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { COLORS, SIZES, PADDING } from "../constants/theme";
import { ICONBACK } from "../assets/images/images";

const FullButton = ({ text, onPress, colorScheme }) => {
    return (
        <View style={{ marginBottom: SIZES.dp3 }}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={
                    colorScheme === "dark"
                        ? stylesDark.fullButton
                        : stylesLight.fullButton
                }
                onPress={onPress}
            >
                <Text
                    style={
                        colorScheme === "dark"
                            ? stylesLight.text2
                            : stylesDark.text2
                    }
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const BackButton = () => {
    const navigation = useNavigation();
    return (
        <View style={{ marginBottom: SIZES.dp3 }}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Image source={ICONBACK} />
            </TouchableOpacity>
        </View>
    );
};

const TwoButton = ({ icon, text, onPress1, onPress2, colorScheme }) => {
    return (
        <View style={{ gap: SIZES.dp5 }}>
            <View style={{ flexDirection: "row", gap: SIZES.dp5 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={
                        colorScheme === "dark"
                            ? stylesDark.twoTwoButton
                            : stylesLight.twoTwoButton
                    }
                    onPress={onPress1}
                >
                    <Image
                        style={
                            colorScheme === "dark"
                                ? stylesDark.img
                                : stylesLight.img
                        }
                        source={icon[0]}
                    />
                    <Text
                        style={
                            colorScheme === "dark"
                                ? stylesDark.text
                                : stylesLight.text
                        }
                    >
                        {text[0]}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={
                        colorScheme === "dark"
                            ? stylesDark.twoTwoButton
                            : stylesLight.twoTwoButton
                    }
                    onPress={onPress2}
                >
                    <Image
                        style={
                            colorScheme === "dark"
                                ? stylesDark.img
                                : stylesLight.img
                        }
                        source={icon[1]}
                    />
                    <Text
                        style={
                            colorScheme === "dark"
                                ? stylesDark.text
                                : stylesLight.text
                        }
                    >
                        {text[1]}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const ThreeButton = ({
    icon,
    text,
    onPress1,
    onPress2,
    onPress3,
    colorScheme,
}) => {
    return (
        <View style={{ gap: SIZES.dp5 }}>
            <View style={{ flexDirection: "row", gap: SIZES.dp5 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={
                        colorScheme === "dark"
                            ? stylesDark.twoTwoButton
                            : stylesLight.twoTwoButton
                    }
                    onPress={onPress1}
                >
                    <Image
                        style={
                            colorScheme === "dark"
                                ? stylesDark.img
                                : stylesLight.img
                        }
                        source={icon[0]}
                    />
                    <Text
                        style={
                            colorScheme === "dark"
                                ? stylesDark.text
                                : stylesLight.text
                        }
                    >
                        {text[0]}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={
                        colorScheme === "dark"
                            ? stylesDark.twoTwoButton
                            : stylesLight.twoTwoButton
                    }
                    onPress={onPress2}
                >
                    <Image
                        style={
                            colorScheme === "dark"
                                ? stylesDark.img
                                : stylesLight.img
                        }
                        source={icon[1]}
                    />
                    <Text
                        style={
                            colorScheme === "dark"
                                ? stylesDark.text
                                : stylesLight.text
                        }
                    >
                        {text[1]}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={
                        colorScheme === "dark"
                            ? stylesDark.twoTwoButton
                            : stylesLight.twoTwoButton
                    }
                    onPress={onPress3}
                >
                    <Image
                        style={
                            colorScheme === "dark"
                                ? stylesDark.img
                                : stylesLight.img
                        }
                        source={icon[2]}
                    />
                    <Text
                        style={
                            colorScheme === "dark"
                                ? stylesDark.text
                                : stylesLight.text
                        }
                    >
                        {text[2]}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const TwoTwoButton = ({
    icon,
    text,
    onPress1,
    onPress2,
    onPress3,
    onPress4,
    colorScheme,
}) => {
    return (
        <View style={{ gap: SIZES.dp5 }}>
            <View style={{ flexDirection: "row", gap: SIZES.dp5 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={
                        colorScheme === "dark"
                            ? stylesDark.twoTwoButton
                            : stylesLight.twoTwoButton
                    }
                    onPress={onPress1}
                >
                    <Image
                        style={
                            colorScheme === "dark"
                                ? stylesDark.img
                                : stylesLight.img
                        }
                        source={icon[0]}
                    />
                    <Text
                        style={
                            colorScheme === "dark"
                                ? stylesDark.text
                                : stylesLight.text
                        }
                    >
                        {text[0]}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={
                        colorScheme === "dark"
                            ? stylesDark.twoTwoButton
                            : stylesLight.twoTwoButton
                    }
                    onPress={onPress2}
                >
                    <Image
                        style={
                            colorScheme === "dark"
                                ? stylesDark.img
                                : stylesLight.img
                        }
                        source={icon[1]}
                    />
                    <Text
                        style={
                            colorScheme === "dark"
                                ? stylesDark.text
                                : stylesLight.text
                        }
                    >
                        {text[1]}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", gap: SIZES.dp5 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={
                        colorScheme === "dark"
                            ? stylesDark.twoTwoButton
                            : stylesLight.twoTwoButton
                    }
                    onPress={onPress3}
                >
                    <Image
                        style={
                            colorScheme === "dark"
                                ? stylesDark.img
                                : stylesLight.img
                        }
                        source={icon[2]}
                    />
                    <Text
                        style={
                            colorScheme === "dark"
                                ? stylesDark.text
                                : stylesLight.text
                        }
                    >
                        {text[2]}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={
                        colorScheme === "dark"
                            ? stylesDark.twoTwoButton
                            : stylesLight.twoTwoButton
                    }
                    onPress={onPress4}
                >
                    <Image
                        style={
                            colorScheme === "dark"
                                ? stylesDark.img
                                : stylesLight.img
                        }
                        source={icon[3]}
                    />
                    <Text
                        style={
                            colorScheme === "dark"
                                ? stylesDark.text
                                : stylesLight.text
                        }
                    >
                        {text[3]}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const stylesDark = StyleSheet.create({
    fullButton: {
        justifyContent: "center",
        alignItems: "center",
        padding: SIZES.dp4 + 2,
        paddingLeft: SIZES.dp6,
        paddingRight: SIZES.dp6,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.dp10,
    },
    twoTwoButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: SIZES.dp4 + 2,
        paddingLeft: SIZES.dp6,
        paddingRight: SIZES.dp6,
        backgroundColor: COLORS.gray1,
        borderRadius: SIZES.dp4,
        aspectRatio: "1/1",
    },
    text: {
        color: COLORS.black,
        fontSize: SIZES.dp4,
        fontFamily: "bold",
    },
    text2: {
        color: COLORS.white,
        fontSize: SIZES.dp5,
        fontFamily: "bold",
    },
    img: {
        width: SIZES.dp12,
        height: SIZES.dp12,
    },
});
const stylesLight = StyleSheet.create({
    fullButton: {
        justifyContent: "center",
        alignItems: "center",
        padding: SIZES.dp4 + 2,
        paddingLeft: SIZES.dp6,
        paddingRight: SIZES.dp6,
        backgroundColor: COLORS.black,
        borderRadius: SIZES.dp10,
    },
    twoTwoButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: SIZES.dp4 + 2,
        paddingLeft: SIZES.dp6,
        paddingRight: SIZES.dp6,
        backgroundColor: COLORS.gray1,
        borderRadius: SIZES.dp4,
        aspectRatio: "1/1",
    },
    text: {
        color: COLORS.black,
        fontSize: SIZES.dp4,
        fontFamily: "bold",
    },
    text2: {
        color: COLORS.white,
        fontSize: SIZES.dp5,
        fontFamily: "bold",
    },
    img: {
        marginBottom: SIZES.dp4,
        width: SIZES.dp12,
        height: SIZES.dp12,
    },
});

export { FullButton, BackButton, TwoButton, ThreeButton, TwoTwoButton };
