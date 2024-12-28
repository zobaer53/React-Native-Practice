import { Text, View, StyleSheet } from "react-native";
import React from "react";

export default function Index() {
  return (
    <View
      style={style.container}>


      <Text style={style.red}> just red </Text>
      <Text style={style.bigBlue}>just big blue</Text>
        <Text style={[style.bigBlue, style.red]}>big blue, then red</Text>
        <Text style={[style.red, style.bigBlue]}>red, then big blue</Text>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        marginTop: 50,
        },
    bigBlue:{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        },
    red: {

        color: 'red',}
    })
