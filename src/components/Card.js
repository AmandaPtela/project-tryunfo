import React from 'react';
import PropType from 'prop-types';
// Feito com ajuda de Pesquisa no https://reactjs.org/docs/handling-events.html
class Card extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;
    const cardAttr1S = String(cardAttr1);
    const cardAttr2S = String(cardAttr2);
    const cardAttr3S = String(cardAttr3);
    return (
      <div>
        <p data-testid="name-card">{ cardName }</p>
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <hr />
        <p data-testid="attr1-card">
          { cardAttr1S }
        </p>
        <p data-testid="attr2-card">
          { cardAttr2S }
        </p>
        <p data-testid="attr3-card">
          { cardAttr3S }
        </p>
        <p data-testid="rare-card">
          { cardRare }
        </p>
        { cardTrunfo === true && <h3 data-testid="trunfo-card"> Super Trunfo </h3> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
};
export default Card;
