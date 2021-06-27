import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";

import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Registers({ navigation }) {
    return (

        <ImageBackground source={require("../assets/background.jpg")} style={styles.container}>
            <View style={{ flex: 1 }}></View>
            <View style={styles.bottomContainer}>
                <Text style={{ flex: 2, fontSize: 22, fontWeight: "700" }}>Create an account</Text>
                <Text style={{ flex: 1, color: "gray" }}>Start your career with us</Text>

                <View style={{ padding: 5, alignItems: "flex-end", flex: 2, flexDirection: "row", borderBottomWidth: 0.5 }}>
                    <FontAwesome name="user-o" size={24} color="black" style={{ paddingBottom: 5, paddingRight: 15 }} />

                    <View>
                        <Text style={{ fontWeight: "700", letterSpacing: 1.5 }}>USER</Text>
                        <TextInput placeholder="Youssef Bsheer"></TextInput>
                    </View>
                </View>


                <View style={{ padding: 5, alignItems: "flex-end", flex: 2, flexDirection: "row", borderBottomWidth: 0.5 }}>
                    <Ionicons name="ios-mail-outline" size={24} color="black" style={{ paddingBottom: 5, paddingRight: 15 }} />
                    <View>
                        <Text style={{ fontWeight: "700", letterSpacing: 1.5 }}>NAME</Text>
                        <TextInput placeholder="bsheer.work@gmail.com"></TextInput>
                    </View>
                </View>

                <View style={{ padding: 5, alignItems: "flex-end", flex: 2, flexDirection: "row", borderBottomWidth: 0.5 }}>
                    <Ionicons name="lock-closed-outline" size={24} color="black" style={{ paddingBottom: 5, paddingRight: 15 }} />

                    <View>
                        <Text style={{ fontWeight: "700", letterSpacing: 1.5 }}>PASSWORD</Text>
                        <TextInput placeholder="******" secureTextEntry={true}></TextInput>
                    </View>
                </View>

                <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>

                    <TouchableOpacity  onPress={() => navigation.navigate("Home")} style={styles.loginBtn}>
                        <Text style={{ padding: 20, fontSize: 22, color: "white", fontWeight: "700" }}>Sign Up</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: "row", flex: 3 }}>
                    <Text style={{ flex: 4, color: "gray", alignSelf: "center", fontSize: 14 }}>Already have an account?</Text>

                    <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>

                        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.registerBtn}>
                            <Text style={{ padding: 20, fontSize: 16, fontWeight: "700" }}>Login</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

            <StatusBar barStyle="light-content"  ></StatusBar>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "center"
    },
    bottomContainer:
    {
        padding: "10%",
        flex: 3, backgroundColor: "white", borderTopLeftRadius: 40, borderTopRightRadius: 40
    },
    loginBtn: {
        backgroundColor: "rgb(95, 168, 95)",
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    registerBtn: {
        borderWidth: 1,
        borderColor: "gray",
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    }

});