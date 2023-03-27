import React, {Component} from "react";
import { View, Text, StyleSheet} from "react-native";
import Simples from "./componentes/simples";
import simples from "./componentes/simples";

export default class App extends Component{
  render () {
    return (
    <View style={estilos.container}>  
      <Simples />
    </View>
    );
  }
} 

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fonte: {
    fontSize: 50,
  },
});