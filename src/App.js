import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

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
      raridade: 'normal',
      cardTrunfo: false,
      carta: '',
      baralho: [],
      filtro: '',
      copiaBaralho: [],
      id: true,
    };
  }

  filtrar = (event) => {
    this.setState({ filtro: event.target.value });
  };

  buscarRaridade = () => {
    const { baralho, filtro } = this.state;
    const filtroRaroo = 'raro';
    if (filtro === filtroRaroo) {
      const filtroRaro = baralho.filter((item) => item.raridade === filtroRaroo);
      return this.setState({ copiaBaralho: filtroRaro });
    }
    const filtroMtRaroo = 'muito raro';
    if (filtro === filtroMtRaroo) {
      const filtroMtRaro = baralho.filter((item) => item.raridade === filtroMtRaroo);
      return this.setState({ copiaBaralho: filtroMtRaro });
    }
    const filtroNormall = 'normal';
    if (filtro === filtroNormall) {
      const filtroNormal = baralho.filter((item) => item.raridade === filtroNormall);
      return this.setState({ copiaBaralho: filtroNormal });
    }
    if (filtro === 'todas') {
      return this.setState({ copiaBaralho: baralho });
    }
    if (filtro) {
      const trunfoss = baralho.find((item) => item.cardTrunfo === true);
      return this.setState({ copiaBaralho: [trunfoss] });
    }
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
        ],
        copiaBaralho: [...baralho, {
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
  // resolvido com ajuda dos colegas Carla (turma 20A) e Jessy Damasceno(Turma 21A)

  apagar(event) {
    const { copiaBaralho } = this.state;
    const filtroCard = copiaBaralho.filter((i) => i.nomeCarta !== event.target.name);
    this.setState({ copiaBaralho: filtroCard });
    const trunfo = filtroCard.find((item) => item.cardTrunfo === true);
    this.setState({ cardTrunfo: trunfo });
  }

  render() {
    const { nomeCarta, descricaoCarta, imagem,
      attr1, attr2, attr3, raridade, isSaveButtonDisabled,
      cardTrunfo, carta, baralho, id, copiaBaralho, filtro } = this.state;

    const trunfo = copiaBaralho.filter((cartaa) => cartaa.cardTrunfo === true);
    const trunfoCheck = trunfo.length > 0;

    return (
      <div className="geral">
        <div className="pesquisa">
          <input
            data-testid="name-filter"
            disabled={ filtro === 'on' }
            onChange={ (event) => {
              this.setState({ filtro: event.target.value });
            } }
          />
          <select
            onChange={ (event) => {
              this.setState({ filtro: event.target.value }, this.buscarRaridade);
            } }
            data-testid="rare-filter"
            disabled={ filtro === 'on' }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <input
            className="input-trunfo"
            name="PesquisaTrunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ (event) => {
              this.setState({ filtro: event.target.value }, this.buscarRaridade);
            } }
            data-testid="trunfo-filter"
          />
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
            superTrunfo={ trunfoCheck }
            carta={ carta }
          />
          <Card
            id={ id }
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
              copiaBaralho.map((card, index) => (
                <div
                  key={ index }
                >
                  <Card
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
