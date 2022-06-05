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
      onInputChange,
      onSaveButtonClick,
      isSaveButtonDisabled,
    } = this.props;

    // const checarTrunfo = () => {cardTrunfo}.value = true;
    return (
      <div className="formulario">
        <input
          type="text"
          name="nomeCarta"
          value={ cardName }
          onChange={ onInputChange } // o que for escrito, vira valor do onInput
          data-testid="name-input"
        />
        <input
          type="textarea"
          name="descricaoCarta"
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
        />
        <input
          type="number"
          name="attr1"
          onChange={ onInputChange }
          value={ cardAttr1 }
          data-testid="attr1-input"
        />
        <input
          type="number"
          name="attr2"
          onChange={ onInputChange }
          value={ cardAttr2 }
          data-testid="attr2-input"
        />
        <input
          type="number"
          name="attr3"
          onChange={ onInputChange }
          value={ cardAttr3 }
          data-testid="attr3-input"
        />
        <input
          type="text"
          onChange={ onInputChange }
          value={ cardImage }
          data-testid="image-input"
        />
        <select
          value={ cardRare }
          data-testid="rare-input"
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <input
          type="checkbox"
          className="SuperTrunfo"
          defaultChecked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
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
