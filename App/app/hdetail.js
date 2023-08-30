import { useEffect, useState, useContext } from "react";
import {
    View,
    SafeAreaView,
    Appearance,
    StyleSheet,
    ScrollView,
} from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { SubTitleNM, Title } from "../components/text";
import { COLORS, Margin, SIZES } from "../constants/theme";
import { BackButton } from "../components/button";
import { HistoryContext } from "../context/historyContext";
import { ApiReceiveHistoryDetail } from "../api/historyApi";
import { FullDetailCard } from "../components/card";
import { Loading } from "../components/loading";
import moment from "moment";

const History = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { historyData, setHistoryData } = useContext(HistoryContext);
    const [historyDetailList, setHistoryDetailList] = useState([]);
    const RequestHistoryDetail = async () => {
        const id = historyData.id;
        const data = await ApiReceiveHistoryDetail(id);
        setIsLoading(false);
        setHistoryDetailList(data.data);
    };
    useEffect(() => {
        RequestHistoryDetail();
    }, []);
    moment.locale("ko");
    const tempDate = new Date(Date.parse(historyData.date));
    const koDate = moment(tempDate).format("YYYY년 MM월 DD일");
    const koTime = moment(tempDate).format("HH시 mm분 ss초");
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView
                style={{ height: 240, backgroundColor: COLORS.white }}
            >
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: COLORS.white },
                        headerShadowVisible: false,
                        header: () => <></>,
                    }}
                />
                <View style={styles.headerView}>
                    <BackButton />
                    <Title text={koDate} />
                    <SubTitleNM text={"시작 시간 : " + koTime} />
                    <SubTitleNM text={historyData.id} />
                </View>
            </SafeAreaView>
            {isLoading ? (
                <Loading style={{ flex: 1 }} text={"데이터 불러오는 중"} />
            ) : (
                <ScrollView style={styles.listView}>
                    {historyDetailList.map((item, idx) => (
                        <FullDetailCard data={item} key={idx} />
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
        padding: SIZES.dp6,
        backgroundColor: COLORS.white,
        borderBottomColor: COLORS.gray1,
        borderBottomWidth: 1,
        zIndex: 1,
        marginTop: Margin.safeAreaMargin,
    },
    listView: {
        paddingTop: SIZES.dp2,
        width: "100%",
        height: "100%",
    },
});

export default History;
