import React from 'react';
import PropType from 'prop-types';
// Feito com ajuda de Pesquisa no https://reactjs.org/docs/handling-events.html
class Form extends React.Component {
  handleClique() {
    console.log('clicou');
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      onInputChange,
      onSaveButtonClick,
      isSaveButtonDisabled,
      // carta,
    } = this.props;

    // const checarTrunfo = () => {cardTrunfo}.value = true;
    return (
      <div className="form-total">
        <h1>Tryunfo</h1>
        <form className="formulario">
          <input
            className="input-form"
            placeholder="Nome da Carta"
            type="text"
            name="nomeCarta"
            value={ cardName }
            onChange={ onInputChange } // o que for escrito, vira valor do onInput
            data-testid="name-input"
          />
          <input
            className="input-form"
            type="textarea"
            placeholder="Descrição da Carta"
            name="descricaoCarta"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
          <input
            className="input-form"
            type="number"
            placeholder="Valor atributo 1"
            name="attr1"
            onChange={ onInputChange }
            value={ cardAttr1 }
            data-testid="attr1-input"
          />
          <input
            className="input-form"
            type="number"
            placeholder="Valor atributo 2"
            name="attr2"
            onChange={ onInputChange }
            value={ cardAttr2 }
            data-testid="attr2-input"
          />
          <input
            className="input-form"
            type="number"
            placeholder="Valor atributo 3"
            name="attr3"
            onChange={ onInputChange }
            value={ cardAttr3 }
            data-testid="attr3-input"
          />
          <input
            name="imagem"
            className="input-form"
            placeholder="Link imagem"
            type="text"
            onChange={ onInputChange }
            value={ cardImage }
            data-testid="image-input"
          />
          <div className="secao-raridade">
            <span className="texto-raridade">Raridade:</span>
            <select
              name="raridade"
              value={ cardRare }
              data-testid="rare-input"
              onChange={ onInputChange }
              // onClick={ (event) => this.setState({raridade: event.target.value})}
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </div>
          <div className="secao-checkbox">
            <input
              id="checkbox"
              name="cardTrunfo"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
            />
            <span className="texto-trunfo">Super Trunfo</span>
          </div>
          <button
            name="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}
Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.number.isRequired,
  cardAttr2: PropType.number.isRequired,
  cardAttr3: PropType.number.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  // hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
  // onchange: PropType.func.isRequired,
};

export default Form;
