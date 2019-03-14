//Importando componentes.
import React, { Component } from 'react';
import { View, Image } from 'react-native';
//Constante recebendo imagem jokenpo.png .
const imgTop = require('../../imgs/jokenpo.png');
//Criação componente.
class Top extends Component {
  render = () => {
    return (
      <View>
        <Image source={imgTop} />
      </View>
    );
  };
}
export default Top;
