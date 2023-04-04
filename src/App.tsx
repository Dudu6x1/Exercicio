import React, {Component} from "react";
import { View, Text, StyleSheet} from "react-native";
import Simples from "./componentes/simples";
import simples from "./componentes/simples";
import Frag from "./componentes/Frag";
import Parimpar from "./componentes/Parimpar";
import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";

export default class App extends Component{
  render () {
    return (
      <View style={estilos.container}> 
      {/*<Simples texto='Dudu' /> */}
      {/*<Frag titulo="Cadastro"subtitulo="Tela de cadastro de Produtos" />*/} 
      {/*Parimpar numero={11} />*/}
      <Familia>
        <Membro nome="Ana" sobreNome="Silva"/>
        <Membro nome="Jose" sobreNome="Silva"/>
        <Familia>
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
