import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import Filtrados from './components/Filtrados';

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
      baralho: [],
      listaNomes: '',
      filtro: '',
      filtrado: [],
    };

  filtrar = (event) => {
    this.setState({ filtro: event.target.value });
  };

  buscar = () => {
    const { baralho } = this.state;
    const arreyFiltradosNome = baralho.map((item) => item.nomeCarta);
    // arreyFiltradosNome.includes(filtro) ? filtrado : ''
    this.setState({ filtrado: arreyFiltradosNome });
  }

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
    const { nomeCarta, descricaoCarta, imagem, listaNomes,
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
          {
            nomeCarta,
            descricaoCarta,
            imagem,
            raridade,
            attr1,
            attr2,
            attr3,
            cardTrunfo,
          },
        ],
        listaNomes: [...listaNomes,
          [nomeCarta],
        ],
      });
    });
  }

  render() {
    const { nomeCarta, descricaoCarta, imagem,
      attr1, attr2, attr3, raridade, isSaveButtonDisabled,
      cardTrunfo, carta, baralho, filtro, filtrado } = this.state;
    const aray = carta.includes(filtro); // booleano
    return (
      <div className="geral">
        <div className="pesquisa">
          <input
            type="text"
            data-testid="name-filter"
            name="filtro"
            onChange={ this.filtrar }
          />
          <button type="button" onClick={ this.buscar }>Pesquisar</button>
          { aray && <Filtrados filtrados={ filtrado } /> }
        </div>
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
            baralho={ baralho }
          />
        </div>
        <div className="botao-baralho">
          { baralho ? <button type="button">Ir para baralho</button>
            : '' }
        </div>
        <div className="secao-baralho">
          <div className="area-cartas">
            {
              baralho.map((card) => (<Card
                key={ card.imagem }
                cardName={ card.nomeCarta }
                cardDescription={ card.descricaoCarta }
                cardAttr1={ card.attr1 }
                cardAttr2={ card.attr2 }
                cardAttr3={ card.attr3 }
                cardImage={ card.imagem }
                cardRare={ card.raridade }
                cardTrunfo={ card.cardTrunfo }
              />))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
