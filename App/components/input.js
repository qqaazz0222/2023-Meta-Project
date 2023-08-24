import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS, SIZES, PADDING } from "../constants/theme";
import { useState } from "react";

const InputText = ({ type, value, setValue, placeholder }) => {
    const [isFocus, setIsFocus] = useState(false);
    const BlurInput = (e) => {
        if (e.key === "Enter") {
            e.target.blur();
        }
    };
    return (
        <View style={{ marginBottom: SIZES.dp3 }}>
            <TextInput
                onFocus={() => {
                    setIsFocus(true);
                }}
                onBlur={() => {
                    setIsFocus(false);
                }}
                onKeyPress={BlurInput}
                onChangeText={(text) => setValue(text)}
                value={value}
                placeholder={placeholder}
                style={!isFocus ? styles.textInput : styles.textInput_focus}
                autoCapitalize={"none"}
                autoComplete={"off"}
                autoCorrect={false}
                secureTextEntry={type === "pw" ? true : false}
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
    },
});

export { InputText };
