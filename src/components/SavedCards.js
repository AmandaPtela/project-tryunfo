import React from 'react';
import PropType from 'prop-types';
import '../App.css';

class SavedCards extends React.Component {
  render() {
    const { cardName, cardTrunfo, cardDescription, cardImage,
      cardAttr1S, cardAttr2S, cardAttr3S, cardRare, baralho } = this.props;

    return (
      <div className="baralho-salvos">
        <div className="lista-cartas">
          { baralho }
        </div>
        <div className="secao-cartas-salvas">
          <p className="textos-card">
            Nome:
            { cardName }
          </p>
          { cardTrunfo === true && <h3> Super Trunfo </h3> }
          <div className="imagem">
            <img
              src={ cardImage }
              alt={ cardName }
              height="250px"
              width="250px"
              data-testid="image-card"
            />
          </div>
          <p className="textos-card-bottom">
            Descrição
            { cardDescription }
          </p>
          <div className="secao-attr">
            <p className="textos-card-bottom">
              Atributo 1:
              { cardAttr1S }
            </p>
            <p className="textos-card-bottom">
              Atributo 2:
              { cardAttr2S }
            </p>
            <p className="textos-card-bottom">
              Atributo 3:
              { cardAttr3S }
            </p>
          </div>
          <p className="textos-card-bottom">
            Raridade:
            { cardRare }
          </p>
        </div>
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
  baralho: PropType.string.isRequired,
};

export default SavedCards;
