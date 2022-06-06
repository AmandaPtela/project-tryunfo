import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
    state = {
      nomeCarta: '',
      descricaoCarta: '',
      imagem: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      saveButton: false,
      raridade: '',
      cardTrunfo: false,
      // hasTrunfo: true,
    };

  handlerInput = (event) => {
    const { target: { value, name } } = event;
    if (name === 'attr3' || name === 'attr2' || name === 'attr1') {
      this.setState({ [name]: Number(value) });
    } else {
      this.setState({ [name]: value });
    }
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({ cardTrunfo: false });
    } 
    else {  
    // deixa mudar o estado do checkbox
      this.setState({ cardTrunfo: true });
    }
  }

  handleSaveButton = () => {
    const { nomeCarta, descricaoCarta, imagem,
      attr1, attr2, attr3, raridade } = this.state;
    const valorMaxCard = 90;
    const valorMinCard = 0;
    const maxSoma = 210;

    if (nomeCarta === ''
    || descricaoCarta === ''
    || imagem === ''
    || raridade === ''
    || attr1 > valorMaxCard || attr1 < valorMinCard
    || attr2 > valorMaxCard || attr2 < valorMinCard
    || attr3 > valorMaxCard || attr3 < valorMinCard
    || (attr1 + attr2 + attr3) > maxSoma) {
      this.setState({ saveButton: true });
    }
  }

  render() {
    const { nomeCarta, descricaoCarta, imagem,
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
          cardImage={ imagem }
          cardRare={ raridade }
          cardTrunfo={ cardTrunfo }
          hasTrunfo="cardTrunfo"
          isSaveButtonDisabled={ saveButton }
          onInputChange={ this.handlerInput }
          onSaveButtonClick={ this.handleSaveButton }
        />
        <Card
          cardName={ nomeCarta }
          cardDescription={ descricaoCarta }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ nomeCarta }
          cardRare={ raridade }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
