import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS, SIZES, PADDING } from "../constants/theme";
import { useState } from "react";

const InputText = ({ type, value, setValue, placeholder }) => {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View style={{ marginBottom: SIZES.dp3 }}>
            <TextInput
                onFocus={() => {
                    setIsFocus(true);
                }}
                onBlur={() => {
                    setIsFocus(false);
                }}
                onChangeText={(text) => {
                    setValue(text);
                }}
                defaultValue={value ? value : null}
                placeholder={placeholder}
                style={!isFocus ? styles.textInput : styles.textInput_focus}
                autoCapitalize={"none"}
                autoComplete={"off"}
                autoCorrect={false}
                textContentType={type}
                blurOnSubmit={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        padding: SIZES.dp4,
        paddingLeft: SIZES.dp6,
        paddingRight: SIZES.dp6,
        backgroundColor: COLORS.gray1,
        borderRadius: SIZES.dp10,
        fontSize: SIZES.dp4,
        overflow: "hidden",
    },
    textInput_focus: {
        padding: SIZES.dp4 - 1,
        paddingLeft: SIZES.dp6 - 1,
        paddingRight: SIZES.dp6 - 1,
        backgroundColor: COLORS.gray0,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: SIZES.dp10,
        fontSize: SIZES.dp4,
        overflow: "hidden",
    },
});

export { InputText };
