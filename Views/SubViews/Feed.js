import React from "react"
import {View, Text, StyleSheet, Dimensions, Image, ImageBackground, ScrollView} from "react-native" 

export default function Feed() {
    return (        
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', display: "flex", flexDirection: "row", flexWrap: "wrap", paddingBottom:130}}>

        <View style={styles.ViewStyleFeed}>
          <ImageBackground source={require("./../../assets/download.jpg")} style={{width: '100%', height:140}}/>
          <Text style={styles.TextAppearenceTitle}>José Calado: "Jogadores portugueses estão habituados a mandarem no jogo"</Text>
          <Text style={styles.TextAppearence}>Comentador sublinha que a seleção portuguesa tem capacidade para jogar olhos nos olhos contra qualquer adversário.</Text>
        </View>

        <View style={styles.ViewStyleFeed}>
          <ImageBackground source={require("./../../assets/paulo-futre.jpg")} style={{width: '100%', height:140}}/>
          <Text style={styles.TextAppearenceTitle}>Paulo Futre sobre Fábio Cardoso no FC Porto: “Jorge Mendes vê muito à frente”</Text>
          <Text style={styles.TextAppearence}>Ex-jogador refere que o empresário já pensa numa futura venda por muitos milhões.</Text>
        </View>

        <View style={styles.ViewStyleFeed}>
          <ImageBackground source={require("./../../assets/img_298x168$2021_02_01_00_03_04_1009850.jpg")} style={{width: '100%', height:140}}/>
          <Text style={styles.TextAppearenceTitle}>Rodolfo Reis: "Fernando Santos mexeu muito tarde na equipa"</Text>
          <Text style={styles.TextAppearence}>Comentador lembrou que nem tudo foi positivo na vitória de Portugal frente à Hungria.</Text>
        </View>
        
      </View>
    </ScrollView>


    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "center"
  },

  ViewStyleFeed: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%", 
    height: "35%",
    marginBottom: 20,
    padding: 15,
    borderRadius: "5%", 
    borderWidth: 0.1,
    borderColor: "rgb(129, 229, 129, 0.86)"
  }, 

  TextAppearence: {
    color: "lightblack",
    marginTop: 8
  },

  TextAppearenceTitle: {
    color: "rgba(0, 0, 0, 0.86)",
    marginTop: 10,
    fontWeight: "bold", 
    fontSize:18
  }

});