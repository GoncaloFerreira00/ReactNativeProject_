import React from "react"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import {View,Text, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native" 


export default function Profile() {
    return (
      <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:100, padding:15 }}>
        <View><Image source={require("./../../assets/avatar.png")} style={styles.container}/></View>
        <View style={{marginTop:15}}><Text style={styles.TextAppearence}>Cláudio André</Text></View>
        <View><Text style={{fontSize: 20, marginTop:10}}>Liga NOS</Text></View>
       
        <View>
        <TouchableOpacity style={styles.Btn} >
                    <Text style={{padding: 15,fontSize: 14, fontWeight: "700"}}>Editar Equipas Favoritadas</Text>
                    <AntDesign name="star" size={24} color="rgb(255, 165, 0)" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Btn2}>
                    <Text style={{padding: 15,fontSize: 14, fontWeight: "700"}}>Editar Liga Favorita</Text>
                    <AntDesign name="star" size={24} color="rgb(255, 165, 0)" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Btn2}>
                    <Text style={{padding: 15,fontSize: 14, fontWeight: "700"}}>Definições</Text>
                    <Ionicons name="settings-sharp" size={24} color="gray"/>
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 110,
    resizeMode: "center",
    borderRadius: "300%"
  },

  TextAppearence: {
    fontSize: 22, 
    paddingLeft: 0
  },

  Btn: {
    flexDirection: "row",
    padding: 7,
    marginTop: 55,
    borderWidth: 1,
    borderColor: "gray",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  },

  Btn2: {
    flexDirection: "row",
    padding:7,
    marginTop: 35,
    borderWidth: 1,
    borderColor: "gray",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
}
});