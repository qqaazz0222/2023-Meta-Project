import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS, SIZES, PADDING } from "../constants/theme";
import { useState } from "react";

const InputText = ({ value, setValue, placeholder }) => {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View style={{ marginBottom: SIZES.l3 }}>
            <TextInput
                onFocus={() => {
                    setIsFocus(true);
                }}
                onBlur={() => {
                    setIsFocus(false);
                }}
                onChangeText={(text) => setValue(text)}
                value={value}
                placeholder={placeholder}
                style={!isFocus ? styles.textInput : styles.textInput_focus}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        padding: SIZES.l4,
        paddingLeft: SIZES.l6,
        paddingRight: SIZES.l6åß,
        backgroundColor: COLORS.gray1,
        borderRadius: SIZES.l10,
        fontSize: SIZES.l4,
    },
    textInput_focus: {
        padding: SIZES.l4 - 1,
        paddingLeft: SIZES.l6 - 1,
        paddingRight: SIZES.l6 - 1,
        backgroundColor: COLORS.gray0,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: SIZES.l10,
        fontSize: SIZES.l4,
    },
});

export { InputText };
