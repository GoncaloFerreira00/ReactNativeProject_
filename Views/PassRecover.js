import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, Dimensions, Image } from "react-native";

import { Ionicons } from '@expo/vector-icons'; 

export default function PassRecover({ navigation }) {
    return(
        <View style={styles.Container}>
           <View>
           <Image source={require("../assets/ball.png")} style={styles.image}/>
            </View> 
            
            <TextInput placeholder="Example@example.com" style={styles.input}></TextInput>
            <TextInput placeholder="Password" style={styles.input}></TextInput>

            
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.Btn}>
                <Text style={{ padding: 20, fontSize: 16, fontWeight: "700", color: "white" }}>Send Email</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: "40%",
        justifyContent: "center", 
        alignItems: "center",
    }, 

    image: {
        width: 120,
        height: 110,
        resizeMode: "center",
        borderRadius: "300%"
    },

    input: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: "gray",
        width:"75%",
        padding:15,
        borderRadius: 15

    }, 

    Btn: {
        backgroundColor: "rgb(95, 168, 95)",
        color: "white",
        borderWidth: 1,
        marginTop: 40,
        borderColor: "gray",
        width: "70%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    }
});