import React from 'react';
import PropType from 'prop-types';
// Feito com ajuda de Pesquisa no https://reactjs.org/docs/handling-events.html
class Form extends React.Component {
/*   state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabledEstado: true,
    savedCards: [],
  }; */
  /* constructor(props) {
    super(props)
    this.state = {isToggleOn: true}
    this.handleClick = this.handleClick.bind(this)
    function handleClick () {
      this.setState(valorAtual => ({isToggleOn: !valorAtual.isToggleOn}));
    }
  }
 */
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

    return (
      <div className="formulario">
        <input
          type="text"
          onChange={ onInputChange } // o que for escrito, vira valor do onInput
          value={ cardName }
          data-testid="name-input"
        />
        { onInputChange }
        <input
          type="textarea"
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
        />
        { onInputChange }
        <input
          type="number"
          onChange={ onInputChange }
          value={ cardAttr1 }
          data-testid="attr1-input"
        />
        {onInputChange}
        <input
          type="number"
          onChange={ onInputChange }
          value={ cardAttr2 }
          data-testid="attr2-input"
        />
        {onInputChange}
        <input
          type="number"
          onChange={ onInputChange }
          value={ cardAttr3 }
          data-testid="attr3-input"
        />
        {onInputChange}
        <input
          type="text"
          onChange={ onInputChange }
          value={ cardImage }
          data-testid="image-input"
        />
        {onInputChange}
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
          checked={ cardTrunfo }
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
  cardImage: PropType.number.isRequired,
  cardRare: PropType.bool.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  // hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
  // onchange: PropType.func.isRequired,
};

export default Form;
