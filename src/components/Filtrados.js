import React from 'react';
import PropType from 'prop-types';

class Filtrados extends React.Component {
  render() {
    const { filtrados } = this.props;
    const filtrado = filtrados;
    return (
      <div>
        {
          filtrado.map((i) => (
            <li key={ i }>
              {
                Object.values(i)
              }
            </li>))
        }
      </div>
    );
  }
}
Filtrados.propTypes = {
  filtrados: PropType.arrayOf(PropType.object).isRequired,
};

export default Filtrados;
