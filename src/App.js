import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import SavedCards from './components/SavedCards';

class App extends React.Component {
    state = {
      nomeCarta: '',
      descricaoCarta: '',
      imagem: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      isSaveButtonDisabled: true,
      raridade: '',
      cardTrunfo: false,
      cartas: '',
    };

  handlerInput = (event) => {
    const { target: { value, name } } = event;
    this.setState({ [name]: value }, this.onSaveButtonClick);
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({ cardTrunfo: false });
    } else {
    // deixa mudar o estado do checkbox
      this.setState({ cardTrunfo: true });
    }
  }

  onSaveButtonClick = () => {
    const { nomeCarta, descricaoCarta, imagem,
      attr1, attr2, attr3 } = this.state;
    const maxCard = 90;
    const minCard = 0;
    const somaTotal = 210;
    const attr1N = Number(attr1);
    const attr2N = Number(attr2);
    const attr3N = Number(attr3);
    const somaAttr = attr1N + attr2N + attr3N;

    if (
      nomeCarta === '' || imagem === '' || descricaoCarta === ''
      || attr1 > maxCard || attr1 < minCard
      || attr2 > maxCard || attr2 < minCard
      || attr3 > maxCard || attr3 < minCard
      || somaAttr > somaTotal
    ) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  handleSaveButton = () => {
    const { nomeCarta, descricaoCarta, imagem,
      attr1, attr2, attr3, raridade } = this.state;
    this.setState({
      cartas:
        [nomeCarta, descricaoCarta, imagem,
          raridade, attr1, attr2, attr3],
    }, () => {
      this.setState({ nomeCarta: '',
        descricaoCarta: '',
        imagem: '',
        attr1: 0,
        attr2: 0,
        attr3: 0,
        raridade: 'normal',
      });
    });
  }

  render() {
    const { nomeCarta, descricaoCarta, imagem,
      attr1, attr2, attr3, raridade, isSaveButtonDisabled,
      cardTrunfo, cartas } = this.state;
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handlerInput }
          onSaveButtonClick={ this.handleSaveButton }
          cartas={ cartas }
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
        <SavedCards />
      </div>
    );
  }
}

export default App;
