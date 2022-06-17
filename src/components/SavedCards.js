import React from 'react';
import PropType from 'prop-types';
// Feito com ajuda de Pesquisa no https://reactjs.org/docs/handling-events.html
class SavedCards extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, excluir } = this.props;

    return (
      <div className="secao-carta">
        <p className="textos-card" data-testid="name-card">
          Nome:
          { cardName }
        </p>
        { cardTrunfo === true && <h3 data-testid="trunfo-card"> Super Trunfo </h3> }
        <div className="imagem">
          <img
            src={ cardImage }
            alt={ cardName }
            height="250px"
            width="250px"
            data-testid="image-card"
          />
        </div>
        <p className="textos-card-bottom" data-testid="description-card">
          Descrição
          { cardDescription }
        </p>
        <div className="secao-attr">
          <p className="textos-card-bottom" data-testid="attr1-card">
            Atributo 1:
            { cardAttr1 }
          </p>
          <p className="textos-card-bottom" data-testid="attr2-card">
            Atributo 2:
            { cardAttr2 }
          </p>
          <p className="textos-card-bottom" data-testid="attr3-card">
            Atributo 3:
            { cardAttr3 }
          </p>
        </div>
        <p className="textos-card-bottom" data-testid="rare-card">
          Raridade:
          { cardRare }
        </p>
        <button
          type="button"
          data-testid="delete-button"
          onClick={ excluir }
        >
          Excluir
        </button>
      </div>
    );
  }
}

SavedCards.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  excluir: PropType.func.isRequired,
};
export default SavedCards;
