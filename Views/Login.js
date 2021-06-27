import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";

import { Ionicons } from '@expo/vector-icons'; 

export default function Login({ navigation }) {
    return (

        <ImageBackground source={require("../assets/background.jpg")} style={styles.container}>
            <View style={{ flex: 1 }}></View>
            <View style={styles.bottomContainer}>
                <Text style={{ flex: 1, fontSize: 22,fontWeight:"700"}}>Hello Baller!</Text>
                <Text style={{flex: 1,color: "gray"}}>Sign in to continue</Text>

                <View style={{padding: 5,alignItems: "flex-end",flex: 2,flexDirection: "row",borderBottomWidth: 0.5}}>
                <Ionicons name="person-outline" size={24} color="black" style={{paddingBottom: 5,paddingRight: 15}} />
                    <View>
                        <Text style={{fontWeight: "700",letterSpacing: 1.5}}>Name</Text>
                        <TextInput placeholder="Example234"></TextInput>
                    </View>
                </View>

                <View style={{padding: 5,alignItems: "flex-end",flex: 2,flexDirection: "row",borderBottomWidth: 0.5}}>
                <Ionicons name="lock-closed-outline" size={24} color="black" style={{paddingBottom: 5,paddingRight: 15}} />
                  
                    <View>
                        <Text style={{fontWeight: "700",letterSpacing: 1.5}}>Password</Text>
                        <TextInput placeholder="******" secureTextEntry={true}></TextInput>
                    </View>
                </View>
        
                <View style={{flex: 4, justifyContent: "center",alignItems: "center"}}>

                    <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Home")}>
                        <Text style={{padding: 15,fontSize: 22,color: "white", fontWeight: "700"}}>Log in</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity onPress={()=> navigation.navigate("PassRecover")}>
                    <Text style={{flex: 1,color: "gray",alignSelf: "center",fontSize: 18, textDecorationLine: 'underline'}}>Forgot password?</Text>
                </TouchableOpacity>
                

                <View style={{flex: 3, justifyContent: "center",alignItems: "center"}}>

                <TouchableOpacity onPress={()=> navigation.navigate("Register")} style={styles.registerBtn}>
                    <Text style={{padding: 15,fontSize: 22, fontWeight: "700"}}>Sign Up</Text>
                </TouchableOpacity>

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
        { padding:  "10%",
          flex: 2, backgroundColor: "white", borderTopLeftRadius: 40, borderTopRightRadius: 40 },
    loginBtn: {
        backgroundColor: "rgb(95, 168, 95)",
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    registerBtn: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: "gray",
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    }

});