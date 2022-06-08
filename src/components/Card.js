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
      <div className="secao-carta">
        <h2> Preview </h2>
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
            { cardAttr1S }
          </p>
          <p className="textos-card-bottom" data-testid="attr2-card">
            Atributo 2:
            { cardAttr2S }
          </p>
          <p className="textos-card-bottom" data-testid="attr3-card">
            Atributo 3:
            { cardAttr3S }
          </p>
        </div>
        <p className="textos-card-bottom" data-testid="rare-card">
          Raridade:
          { cardRare }
        </p>
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
