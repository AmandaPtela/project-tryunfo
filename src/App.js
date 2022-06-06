import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
    state = {
      nomeCarta: '',
      descricaoCarta: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      saveButton: true,
      raridade: 'normal',
      cardTrunfo: false,
    };

  handlerInput = (event) => {
    const { target: { value, name } } = event;
    if (name === 'attr3' || name === 'attr2' || name === 'attr1') {
      this.setState({ [name]: Number(value) });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleCliqueButton = () => {
    // const { cardTrunfo } = this.state;
    console.log('clicou botão salvar');
    this.setState({ cardTrunfo: true });
  };

  handleSaveButton = () => {
    const valorMaxCard = 90;
    const maxSoma = 210;
    const atributo1 = Number(attr1);
    const atributo2 = Number(attr2);
    const atributo3 = Number(attr3);
    const somaAtr = atributo1 + atributo2 + atributo3;

    if (nomeCarta === ''
    || descricaoCarta === ''
    || cardImage === '') {
      this.setState({ saveButton: true });
    }
    if (atributo1 > valorMaxCard // || atributo1 > 0
    || atributo2 > valorMaxCard // || atributo2 > 0
    || atributo3 > valorMaxCard) {
      this.setState({ saveButton: true });
    }
    // || atributo3 > 0
    if (somaAtr > maxSoma) {
      this.setState({ saveButton: true });
    } else {
      this.setState({ saveButton: false });
    }
  }

  render() {
    const { nomeCarta, descricaoCarta,
      attr1, attr2, attr3, raridade, saveButton, cardTrunfo } = this.state;
    return (
      <div className="geral">
        <h1>Tryunfo</h1>
        <Form
          cardName={ nomeCarta }
          cardDescription={ descricaoCarta }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ nomeCarta }
          cardRare={ raridade }
          cardTrunfo={ this.handleCliqueButton }
          hasTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ saveButton }
          onInputChange={ this.handlerInput }
          onSaveButtonClick={ this.handleCliqueButton }
        />
        <Card
          cardName={ nomeCarta }
          cardDescription={ descricaoCarta }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ nomeCarta }
          cardRare={ raridade }
          cardTrunfo={ this.handleCliqueButton }
        />
      </div>
    );
  }
}

export default App;
