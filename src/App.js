import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import Filtrados from './components/Filtrados';
import SavedCards from './components/SavedCards';

class App extends React.Component {
  constructor() {
    super();
    this.apagar = this.apagar.bind(this);

    this.state = {
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
      filtro: '',
      filtrado: [],
    };
  }

  filtrar = (event) => {
    this.setState({ filtro: event.target.value });
  };

  buscarRaridade = () => {
    const { baralho, filtro } = this.state;
    const copiaBaralho = [...baralho];
    if (filtro === 'todas') {
      return copiaBaralho;
    }
    if (filtro === 'raro' || filtro === 'muito raro' || filtro === 'normal') {
      const filtroRaridade = baralho.filter((item) => item.raridade === filtro);
      this.setState({ filtrado: filtroRaridade });
    }

    if (filtro) {
      return (baralho.filter((item) => item.cardName.startsWith(filtro)));
    }
  /*     if (PesquisaTrunfo) {
      const filtroTrunfo = baralho.find((itm) => itm.cardTrunfo === true);
      this.setState({ filtrado: filtroTrunfo });
    } */
  }

  handlerInput = ({ target }) => {
    const { name } = target;
    const valor = (target.type === 'checkbox')
      ? target.checked
      : target.value;
    this.setState({
      [name]: valor,
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
        ] });
    });
  }

  apagar(event) {
    const { baralho } = this.state;
    const filtroCard = baralho.filter((item) => item.nomeCarta !== event.target.name);
    this.setState({ baralho: filtroCard });

    const trunfo = filtroCard.some((item) => item.cardTrunfo === true);
    this.setState({ cardTrunfo: trunfo });
  }

  render() {
    const { nomeCarta, descricaoCarta, imagem,
      attr1, attr2, attr3, raridade, isSaveButtonDisabled,
      cardTrunfo, carta, baralho, filtrado } = this.state;

    const trunfo = baralho.filter((cartaa) => cartaa.cardTrunfo === true);
    const trunfoCheck = trunfo.length;
    return (
      <div className="geral">
        <div className="pesquisa">
          <input
            data-testid="name-filter"
            onChange={ (event) => {
              this.setState({ filtro: event.target.value });
            } }
          />
          <select
            onChange={ (event) => {
              this.setState({ filtro: event.target.value });
            } }
            data-testid="rare-filter"
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <button type="button" onClick={ this.buscarRaridade }>Pesquisar</button>
          <input
            className="input-trunfo"
            name="PesquisaTrunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ (event) => {
              this.setState({ filtro: event.target.value });
            } }
            data-testid="trunfo-filter"
          />
        </div>
        <Filtrados
          filtrados={ filtrado }
        />
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
            superTrunfo={ trunfoCheck }
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
        <div className="botao-baralho">
          { baralho ? <button type="button">Ir para baralho</button>
            : '' }
        </div>
        <div className="secao-baralho">
          <div className="area-cartas">
            {
              baralho.map((card, index) => (
                <div
                  key={ index }
                >
                  <SavedCards
                    cardName={ card.nomeCarta }
                    cardDescription={ card.descricaoCarta }
                    cardAttr1={ card.attr1 }
                    cardAttr2={ card.attr2 }
                    cardAttr3={ card.attr3 }
                    cardImage={ card.imagem }
                    cardRare={ card.raridade }
                    cardTrunfo={ card.cardTrunfo }
                  />
                  <button
                    name={ card.nomeCarta }
                    type="button"
                    data-testid="delete-button"
                    onClick={ (cartaaa) => this.apagar(cartaaa) }
                  >
                    Excluir
                  </button>
                </div>))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
