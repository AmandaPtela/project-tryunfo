import React from 'react';
import PropType from 'prop-types';

class Filtrados extends React.Component {
  render() {
    const { filtrados } = this.props;
    const filtrado = filtrados;
    return (
      <div>
        <div>
          {
            filtrado.map((i) => (
              <ul>
                <li key={ i.cardName }>
                  {
                   Object.values(i)
                  }
                </li>
              </ul>
            ))
          }
        </div>
      </div>
    );
  }
}
Filtrados.propTypes = {
  filtrados: PropType.arrayOf(PropType.object).isRequired,
};

export default Filtrados;

