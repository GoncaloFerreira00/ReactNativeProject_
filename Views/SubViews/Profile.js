import React, { useEffect, useState } from "react"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator, FlatList } from "react-native"


export default function Profile() {
  const [data, setData] = useState([]);

  const getData = async () => {
      const response = await fetch("https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "282a30380amshcc06a89fceff160p189daejsn67bf026bf448",
          "x-rapidapi-host": "livescore6.p.rapidapi.com"
        }
      })
      const json = await response.json();
      setData(json.Stages);
      console.log(json.Stages)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <ScrollView>
      <Text style={styles.texttitle}>JOGOS A DECORRER</Text>
    <View>
      <FlatList data={data} keyExtractor={({Sid}, index) => Sid} 
      renderItem={({item}) => (
        <Text style={styles.text}>{item.Snm + " "}{item.Events[0].T1[0].Nm}{" - "}{item.Events[0].T2[0].Nm}{" (" + item.Cnm + ")"}</Text>
      )}/>
    </View>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  TextAppearence: {
    fontSize: 22,
    paddingLeft: 0
  },

  text: {
    borderWidth: 0.1,
    padding: 5,
    fontSize: 17,
    borderColor: "rgba(129, 229, 129, 0.86)"
  }, 
  texttitle: {
    fontSize: 32,
    textAlign: "center",
    padding:10
  }

});