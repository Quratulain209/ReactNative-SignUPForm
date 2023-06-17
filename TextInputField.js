import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const TextInputField = (prop) => {

    const [eye, seteye] = useState(false)
    return (
        <View>
            <TextInput style={styles.inputStyle}
                value={prop.val}
                placeholder={prop.placeHolderInfo}
                onChangeText={(txt) => prop.handleTextChange(txt)}
                autoCorrect={false}
                autoCapitalize={false}
                secureTextEntry={prop.eye ? (!eye ? true : false) : false}
            />

            {prop.eye ? (
                <TouchableOpacity onPress={() => seteye(!eye)} style={styles.EyeStyle}>
                    <FontAwesome5
                        name={eye ? "eye" : "eye-slash"}
                        size={14} />
                </TouchableOpacity>
            ) : null}
        </View>
    )
}
export default TextInputField

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 4,
        fontSize: 15,
        marginBottom: 10
    },
    EyeStyle: {
        position: 'absolute',
        right: 20,
        top: 15
    }
})