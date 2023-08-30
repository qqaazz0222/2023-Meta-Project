import { useEffect, useState, useContext } from "react";
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../components/text";
import { COLORS, Margin, SIZES } from "../constants/theme";
import { BackButton } from "../components/button";
import { ApiReceiveHistoryList } from "../api/historyApi";
import { FullCard } from "../components/card";
import { Loading } from "../components/loading";
import { UserContext } from "../context/userContext";
import { HistoryContext } from "../context/historyContext";

const History = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();
    const { userData, setUserData } = useContext(UserContext);
    const { historyData, setHistoryData } = useContext(HistoryContext);
    const [historyList, setHistoryList] = useState([]);
    const RequestHistoryList = async () => {
        const data = await ApiReceiveHistoryList(userData.email);
        setIsLoading(false);
        if (data.state === 200) {
            setHistoryList(data.data);
        }
    };
    const ShowDetail = (idx) => {
        console.log(historyList[idx]);
        setHistoryData(historyList[idx]);
        navigation.navigate("hdetail");
    };
    useEffect(() => {
        RequestHistoryList();
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView
                style={{ height: 180, backgroundColor: COLORS.white }}
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
                    <Title text={"기록"} />
                </View>
            </SafeAreaView>

            {isLoading ? (
                <Loading style={{ flex: 1 }} text={"데이터 불러오는 중"} />
            ) : (
                <ScrollView style={styles.listView}>
                    {historyList.map((item, idx) => (
                        <FullCard
                            date={item.date}
                            id={item.id}
                            key={idx}
                            onPress={() => {
                                ShowDetail(idx);
                            }}
                        />
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
