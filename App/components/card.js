import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { COLORS, SIZES, PADDING } from "../constants/theme";
import { SpacerAuto } from "./spacer";

const TwoCard = ({ icon, text, val }) => {
    return (
        <View style={{ gap: SIZES.dp5 }}>
            <View style={{ flexDirection: "row", gap: SIZES.dp5 }}>
                <TouchableOpacity style={styles.twoCard}>
                    <Image style={styles.img} source={icon[0]} />
                    <Text style={styles.text}>{text[0]}</Text>
                    <SpacerAuto />
                    <Text style={styles.value}>{val[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.twoCard}>
                    <Image style={styles.img} source={icon[1]} />
                    <Text style={styles.text}>{text[1]}</Text>
                    <SpacerAuto />
                    <Text style={styles.value}>{val[1]}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const ThreeCard = ({ icon, text, val }) => {
    return (
        <View style={{ gap: SIZES.dp5 }}>
            <View style={{ flexDirection: "row", gap: SIZES.dp5 }}>
                <TouchableOpacity style={styles.twoCard}>
                    <Image style={styles.img} source={icon[0]} />
                    <Text style={styles.text}>{text[0]}</Text>
                    <SpacerAuto />
                    <Text style={styles.value}>{val[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.twoCard}>
                    <Image style={styles.img} source={icon[1]} />
                    <Text style={styles.text}>{text[1]}</Text>
                    <SpacerAuto />
                    <Text style={styles.value}>{val[1]}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", gap: SIZES.dp5 }}>
                <TouchableOpacity style={styles.twoCard}>
                    <Image style={styles.img} source={icon[2]} />
                    <Text style={styles.text}>{text[2]}</Text>
                    <SpacerAuto />
                    <Text style={styles.value}>{val[2]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dummyCard} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    fullCard: {
        justifyContent: "center",
        alignItems: "center",
        padding: SIZES.dp4 + 2,
        paddingLeft: SIZES.dp6,
        paddingRight: SIZES.dp6,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.dp10,
    },
    twoCard: {
        flex: 1,
        padding: SIZES.dp4 + 2,
        paddingLeft: SIZES.dp5,
        paddingRight: SIZES.dp6,
        backgroundColor: COLORS.gray1,
        borderRadius: SIZES.dp4,
        aspectRatio: "1/1",
    },
    dummyCard: {
        flex: 1,
        padding: SIZES.dp4 + 2,
        paddingLeft: SIZES.dp6,
        paddingRight: SIZES.dp6,
        borderRadius: SIZES.dp4,
        aspectRatio: "1/1",
    },
    text: {
        paddingLeft: SIZES.dp2,
        color: COLORS.gray6,
        fontSize: SIZES.dp4,
        fontFamily: "bold",
    },
    text2: {
        color: COLORS.white,
        fontSize: SIZES.dp5,
        fontFamily: "bold",
    },
    value: {
        textAlign: "right",
        fontSize: SIZES.dp12,
        fontFamily: "medium",
    },
    img: {
        marginBottom: SIZES.dp1,
        width: SIZES.dp8,
        height: SIZES.dp8,
    },
});

export { TwoCard, ThreeCard };
