import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
//Importações das imagens.
const imgStone = require('../../imgs/pedra.png');
const imgPaper = require('../../imgs/papel.png');
const imgScissors = require('../../imgs/tesoura.png');

//Criando componente Icon.
class Icon extends Component {
  //Conteúdo que o render nos retornará.
  render = () => {
    //Condição para imagem pedra.
    if (this.props.choice === 'Pedra') {
      return (
        <View style={styles.viewIcon}>
          <Text style={styles.textResultGame}>{this.props.resultGame}</Text>
          <Text style={styles.textPlayer}>{this.props.player}</Text>
          <Image source={imgStone} />
        </View>
      );
    }
    //Condição para a imagem papel.
    if (this.props.choice === 'Papel') {
      return (
        <View style={styles.viewIcon}>
          <Text style={styles.textResultGame}>{this.props.resultGame}</Text>
          <Text style={styles.textPlayer}>{this.props.player}</Text>
          <Image source={imgPaper} />
        </View>
      );
    }
    //Condição para a imagem tesoura.
    if (this.props.choice === 'Tesoura') {
      return (
        <View style={styles.viewIcon}>
          <Text style={styles.textResultGame}>{this.props.resultGame}</Text>
          <Text style={styles.textPlayer}>{this.props.player}</Text>
          <Image source={imgScissors} />
        </View>
      );
    }
    //Caso não entre em nenhum if, retorne false para não causar erro no render.
    return false;
  };
}
//Criação dos estilos.
const styles = StyleSheet.create({
  viewIcon: {
    alignItems: 'center',
  },
  textResultGame: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  textPlayer: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#09afff',
  },
});
export default Icon;
