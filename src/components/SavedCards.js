import React from 'react';
import PropType from 'prop-types';

class SavedCards extends React.Component {
  render() {
    const { carta, barai } = this.props;
    const array = carta;
    return (
      <div name="carta">
        <p>
          Nome:
          { array[0] }
        </p>
        <p>
          Descrição da Carta:
          { array[1] }
        </p>
        <p>
          src Imagem:
          { array[2] }
        </p>
        <p>
          Raridade:
          { array[3] }
        </p>
        <p>
          Atributo 1:
          { array[4] }
        </p>
        <p>
          Atributo 2:
          { array[5] }
        </p>
        <p>
          Atributo 3:
          { array[6] }
        </p>
        { barai }
      </div>
    );
  }
}
SavedCards.propTypes = {
  carta: PropType.string.isRequired,
  barai: PropType.string.isRequired,
};

export default SavedCards;
