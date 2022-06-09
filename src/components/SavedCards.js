import React from 'react';
import PropType from 'prop-types';
import '../App.css';

class SavedCards extends React.Component {
  render() {
    const { baralho } = this.props;
    return (
      <div className="baralho-salvos">
        <div className="baralho">
          { baralho }
        </div>
      </div>
    );
  }
}
SavedCards.propTypes = {
  baralho: PropType.string.isRequired,
  listaNomes: PropType.string.isRequired,
  carta: PropType.string.isRequired,
};

export default SavedCards;
