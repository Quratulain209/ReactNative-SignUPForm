import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextInputField from "./TextInputField";

const SignupForm = () => {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [reTypePassword, setreTypePassword] = useState('')

    const SetFirstNameState = (val) => {
        setFirstName(val)
    }
    const SetLastNameState = (val) => {
        setLastName(val)
    }
    const SetEmailState = (val) => {
        setEmail(val)
    }
    const SetPasswordState = (val) => {
        setPassword(val)
    }
    const SetreTypePasswordState = (val) => {
        setreTypePassword(val)
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.heading}>Sign Up</Text>

            <Text style={styles.LabelStyle} >{'First Name'}</Text>
            <TextInputField
                val={FirstName}
                placeHolderInfo=" First Name"
                handleTextChange={(newval) => SetFirstNameState(newval)}
                eye={false}
            />

            <Text style={styles.LabelStyle}>{'Last Name'}</Text>
            <TextInputField
                val={LastName}
                placeHolderInfo=" Last Name"
                handleTextChange={(newval) => SetLastNameState(newval)}
                eye={false}
            />

            <Text style={styles.LabelStyle}>{'Email'}</Text>
            <TextInputField
                val={Email}
                placeHolderInfo="Enter email"
                handleTextChange={(newval) => SetEmailState(newval)}
                eye={false}
            />

            <Text style={styles.LabelStyle}>{'Password'}</Text>
            <TextInputField
                val={Password}
                placeHolderInfo="Enter Password"
                handleTextChange={(newval) => SetPasswordState(newval)}
                eye={true}
            />

            <Text style={styles.LabelStyle}>{'ReType Password'}</Text>
            <TextInputField
                val={reTypePassword}
                placeHolderInfo="Re type Password"
                handleTextChange={(newval) => SetreTypePasswordState(newval)}
                eye={true}
            />

            <TouchableOpacity >
                <Text style={styles.buttonStyle}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={{ textAlign: "right", fontWeight: "thin", fontSize: 13, marginTop: 7 }}>
                Already Registered
                <Text style={{ color: "#167bff" }}>
                    Sign in
                </Text>
            </Text>
        </View>
    )
}
export default SignupForm

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        marginHorizontal : 20
    },
    heading: {
        fontSize: 40,
        textAlign: "center",
        marginBottom: 15
    },
    LabelStyle: {
        fontSize: 16,
        marginBottom: 7,
        fontWeight: "bold"
    },
    buttonStyle: {
        backgroundColor: "#167bff",
        textAlign: "center",
        paddingVertical: 10,
        borderRadius: 4,
        color: "#fff",
        marginTop : 8
    }
})