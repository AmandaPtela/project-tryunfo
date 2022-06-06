import React from 'react';
import PropType from 'prop-types';

class SavedCards extends React.Component {
  render() {
    const { cartas } = this.props;
    return (
      <div name="cartas">
        { cartas }
      </div>
    );
  }
}
SavedCards.propTypes = {
  cartas: PropType.string.isRequired,
};

export default SavedCards;
