import React from 'react';
import PropType from 'prop-types';
import '../App.css';

class SavedCards extends React.Component {
  render() {
    const { cardName, cardTrunfo, cardDescription, cardImage,
      cardAttr1S, cardAttr2S, cardAttr3S, cardRare } = this.props;
    return (
      <div className="secao-cartas-salvas">
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
SavedCards.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1S: PropType.number.isRequired,
  cardAttr2S: PropType.number.isRequired,
  cardAttr3S: PropType.number.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
};

export default SavedCards;
