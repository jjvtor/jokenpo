//Importando componentes.
import React, { Component } from 'react';
import { AppRegistry, View, Button, StyleSheet } from 'react-native';
import Top from './src/component/top';
import Icon from './src/component/icon';
//Criando componente.
class JokenPo extends Component {
  constructor(props) {
    super(props);
    //Atribuindo 3 estados iniciais/padrão.
    this.state = { choiceUser: '', choiceComputer: '', result: '' };
  }
  //Lógica do game.
  jokenPo = choiceUser => {
    const options = ['Pedra', 'Papel', 'Tesoura'];
    // randomIndex criado para receber números randômicos entre 0 e 2.
    let randomIndex = Math.random() * 3;
    //convertsInteger criado para receber o valor inteiro de randomIndex.
    let convertsInteger = Math.floor(randomIndex);
    //choiceComputer criado para receber as opções de forma aleatória.
    let choiceComputer = options[convertsInteger];
    let result = '';
    //Lógica feita para o resultado do game.
    if (choiceUser === choiceComputer) {
      result = 'EMPATE!';
    }
    if (choiceUser === 'Pedra' && choiceComputer === 'Papel') {
      result = 'VOCÊ PERDEU!';
    }
    if (choiceUser === 'Pedra' && choiceComputer === 'Tesoura') {
      result = 'VOCÊ GANHOU!';
    }
    if (choiceUser === 'Papel' && choiceComputer === 'Pedra') {
      result = 'VOCÊ GANHOU!';
    }
    if (choiceUser === 'Papel' && choiceComputer === 'Tesoura') {
      result = 'VOCÊ PERDEU!';
    }
    if (choiceUser === 'Tesoura' && choiceComputer === 'Papel') {
      result = 'VOCÊ GANHOU!';
    }
    if (choiceUser === 'Tesoura' && choiceComputer === 'Pedra') {
      result = 'VOCÊ PERDEU!';
    }
    //Aleração do estado.
    this.setState({ choiceUser, choiceComputer, result });
    return false;
  };
  //Render responsável pela renderização do app.
  render = () => {
    return (
      <View style={styles.mainView}>
        <Top />
        <View style={styles.viewButtons}>
          <View style={styles.buttons}>
            <Button
              onPress={() => {
                this.jokenPo('Papel');
              }}
              title="Papel"
            />
          </View>
          <View style={styles.buttons}>
            <Button
              onPress={() => {
                this.jokenPo('Tesoura');
              }}
              title="Tesoura"
            />
          </View>
          <View style={styles.buttons}>
            <Button
              onPress={() => {
                this.jokenPo('Pedra');
              }}
              title="Pedra"
            />
          </View>
        </View>
        <Icon
          resultGame={this.state.result}
          choice={this.state.choiceUser}
          player="Você"
        />
        <Icon choice={this.state.choiceComputer} player="Adversário" />
      </View>
    );
  };
}
//Criação de estilos.
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  buttons: {
    marginTop: 10,
    width: 100,
  },
  viewButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});
//Registo de componente.
AppRegistry.registerComponent('JokenPo', () => JokenPo);
