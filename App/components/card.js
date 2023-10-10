import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { COLORS, SIZES, PADDING } from "../constants/theme";
import { SpacerAuto } from "./spacer";
import moment from "moment";

const OneCard = ({ text, func }) => {
    return (
        <View style={{ gap: SIZES.dp5 }}>
            <View style={{ flexDirection: "row", gap: SIZES.dp5 }}>
                <TouchableOpacity style={styles.oneCard} onPress={func}>
                    <Text style={styles.text3}>{text[0]}</Text>
                    <Text style={styles.text4}>{text[1]}</Text>
                    <Text style={styles.text5}>{text[2]}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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

const FullCard = ({ date, id, onPress, value }) => {
    moment.locale("ko");
    const tempDate = new Date(Date.parse(date));
    const koDate = moment(tempDate).format("YYYY년 MM월 DD일");
    const koTime = moment(tempDate).format("HH시 mm분 ss초");
    return (
        <TouchableOpacity style={styles.fullCard} onPress={onPress}>
            <Text
                style={{
                    marginBottom: SIZES.dp1,
                    color: COLORS.gray6,
                    fontFamily: "semibold",
                    fontSize: SIZES.dp4,
                }}
            >
                {koDate}
            </Text>
            <Text
                style={{
                    marginBottom: SIZES.dp4,
                    color: COLORS.gray6,
                    fontFamily: "bold",
                    fontSize: SIZES.dp7,
                }}
            >
                {koTime}
            </Text>
            <Text style={{ color: COLORS.gray3, fontSize: SIZES.dp3 }}>
                {id}
            </Text>
        </TouchableOpacity>
    );
};

const FullDetailCard = ({ data }) => {
    console.log(data);
    moment.locale("ko");
    const tempDate = new Date(Date.parse(data.date));
    const koTime = moment(tempDate).format("HH시 mm분 ss초");
    return (
        <View style={styles.fullCard}>
            <Text style={{ color: COLORS.gray6, fontSize: SIZES.dp3 }}>
                위도 : {data.gps.latitude}
            </Text>
            <Text style={{ color: COLORS.gray6, fontSize: SIZES.dp3 }}>
                경도 : {data.gps.longitude}
            </Text>
            <Text style={{ color: COLORS.gray6, fontSize: SIZES.dp3 }}>
                자이로 X : {data.gyro.x}
            </Text>
            <Text style={{ color: COLORS.gray6, fontSize: SIZES.dp3 }}>
                자이로 Y : {data.gyro.y}
            </Text>
            <Text style={{ color: COLORS.gray6, fontSize: SIZES.dp3 }}>
                자이로 Z : {data.gyro.z}
            </Text>
            <Text style={{ color: COLORS.gray6, fontSize: SIZES.dp3 }}>
                가속도 : {data.aclr.x}
            </Text>
            <Text style={{ color: COLORS.gray6, fontSize: SIZES.dp3 }}>
                가속도 : {data.aclr.y}
            </Text>
            <Text style={{ color: COLORS.gray6, fontSize: SIZES.dp3 }}>
                가속도 : {data.aclr.z}
            </Text>
            <Text style={{ color: COLORS.gray6, fontSize: SIZES.dp3 }}>
                실시간 걸음수 : {data.pedo.currentStepCount}, 24시간동안 걸음수
                {data.pedo.pastStepCount}
            </Text>
            <Text
                style={{
                    marginTop: SIZES.dp2,
                    color: COLORS.gray4,
                    fontSize: SIZES.dp3,
                }}
            >
                {koTime}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    fullCard: {
        padding: SIZES.dp4,
        paddingLeft: SIZES.dp6,
        paddingRight: SIZES.dp6,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.dp4,
        borderBottomColor: COLORS.gray1,
        borderBottomWidth: 1,
    },
    oneCard: {
        width: "100%",
        padding: SIZES.dp6,
        paddingLeft: SIZES.dp6,
        paddingRight: SIZES.dp6,
        backgroundColor: COLORS.gray1,
        borderRadius: SIZES.dp4,
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
    text3: {
        color: COLORS.gray6,
        fontSize: SIZES.dp4,
        fontFamily: "semibold",
    },
    text4: {
        color: COLORS.gray6,
        fontSize: SIZES.dp8,
        fontFamily: "bold",
    },
    text5: {
        color: COLORS.gray4,
        fontSize: SIZES.dp6,
        fontFamily: "medium",
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

export { OneCard, TwoCard, ThreeCard, FullCard, FullDetailCard };
