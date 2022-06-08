import React from 'react';
import './App.css';
// import Busca from './components/Busca';
import Form from './components/Form';
import Card from './components/Card';
import SavedCards from './components/SavedCards';

class App extends React.Component {
    state = {
      nomeCarta: '',
      descricaoCarta: '',
      imagem: '',
      attr1: '',
      attr2: '',
      attr3: '',
      isSaveButtonDisabled: true,
      raridade: '',
      cardTrunfo: false,
      carta: '',
      baralho: '',
    };

  handlerInput = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox')
      ? target.checked
      : target.value;
    this.setState({
      [name]: value,
    }, this.onSaveButtonClick);
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
      attr1, attr2, attr3, raridade, baralho, cardTrunfo } = this.state;
    this.setState({
      carta:
        [nomeCarta, descricaoCarta, imagem,
          raridade, attr1, attr2, attr3, cardTrunfo],
    }, () => {
      this.setState({ nomeCarta: '',
        descricaoCarta: '',
        imagem: '',
        attr1: 0,
        attr2: 0,
        attr3: 0,
        raridade: 'normal',
        cardTrunfo: false,
        baralho: [
          ...baralho,
          [
            nomeCarta,
            descricaoCarta,
            imagem,
            raridade,
            attr1,
            attr2,
            attr3,
            cardTrunfo,
          ],
        ],
      });
    });
  }

  render() {
    const { nomeCarta, descricaoCarta, imagem,
      attr1, attr2, attr3, raridade, isSaveButtonDisabled,
      cardTrunfo, carta, baralho } = this.state;
    return (
      <div className="geral">
        {/* <Busca /> */}
        <div className="form-preview">
          <Form
            cardName={ nomeCarta }
            cardDescription={ descricaoCarta }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ imagem }
            cardRare={ raridade }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.handlerInput }
            onSaveButtonClick={ this.handleSaveButton }
            baralho={ baralho }
            carta={ carta }
          />
          <Card
            cardName={ nomeCarta }
            cardDescription={ descricaoCarta }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ imagem }
            cardRare={ raridade }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div className="baralho">
          <SavedCards
            carta={ carta }
            baralho={ baralho }
          />
        </div>

      </div>
    );
  }
}

export default App;
