import React from "react"
import {View,Text, StyleSheet, ScrollView, Image} from "react-native" 


export default function Updates() {
    return (
      <ScrollView>
        <View style={{padding:5}}>
          <View style={[styles.ViewStyleFeed]}><Image source={require("./../../assets/benfica.jpg")} style={styles.container}/><Text style={styles.TextAppearence}>O Benfica anuncia hoje 
            uma nova contratação.</Text></View>

          <View style={[styles.ViewStyleFeed]}><Image source={require("./../../assets/benfica.jpg")} style={styles.container}/><Text style={styles.TextAppearence}>
            Apresentação de equipamentos da equipa principal.</Text></View>

          <View style={[styles.ViewStyleFeed]}><Image source={require("./../../assets/bateno.jpg")} style={styles.container}/><Text style={styles.TextAppearence}>
            O nosso novo patrocinador: Betano, clica aqui para saberes mais.</Text></View>

          <View style={[styles.ViewStyleFeed]}><Image source={require("./../../assets/sporting.png")} style={styles.container}/><Text style={styles.TextAppearence}>
            Vê aqui o novo equipamento do Sporting.</Text></View>

          <View style={[styles.ViewStyleFeed]}><Image source={require("./../../assets/pt.png")} style={styles.container}/><Text style={styles.TextAppearence}>
            Sabe tudo sobre o euro 2020.</Text></View>
          
          <View style={[styles.ViewStyleFeed]}><Image source={require("./../../assets/braga.png")} style={styles.container}/><Text style={styles.TextAppearence}>
            Declarações do presidente sobre o mercado de transferências.</Text></View>
            
          <View style={[styles.ViewStyleFeed]}><Image source={require("./../../assets/bateno.jpg")} style={styles.container}/><Text style={styles.TextAppearence}>
            O nosso novo patrocinador: Betano, clica aqui para saberes mais.</Text></View>

          <View style={[styles.ViewStyleFeed]}><Image source={require("./../../assets/porto.jpg")} style={styles.container}/><Text style={styles.TextAppearence}>
            Declarações do presidente sobre o mercado de transferências.</Text></View>
          
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      width: 30,
      height: 30,
      resizeMode: "center",
      borderRadius: 20
    },

    ViewStyleFeed: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%", 
      height: "35%",
      paddingLeft:10,
      borderRadius: "5%", 
      borderBottomWidth: 2,
      borderColor: "rgba(129, 229, 129, 0.86)"
    }, 

    paddingTop: {
      paddingTop:0
    },

    TextAppearence: {
      fontSize: 16, 
      paddingLeft: 10
    }
  });