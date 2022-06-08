import React from 'react';
import PropType from 'prop-types';
import '../App.css';

class SavedCards extends React.Component {
  render() {
    const { baralho } = this.props;
    return (
      <div className="secao-cartas-salvas">
        { baralho }
      </div>
    );
  }
}
SavedCards.propTypes = {
  // carta: PropType.string.isRequired,
  baralho: PropType.string.isRequired,
};

export default SavedCards;
