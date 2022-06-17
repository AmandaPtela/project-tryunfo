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
              <li key={ i.nomeCarta }>
                {
                  Object.values(i)
                }
              </li>))
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

/*
apagar = (event) => {
  const { baralho } = this.state;
  this.setState({
    baralho: baralho.splice(baralho.indexOf(event.target, 1)),
  });
} */
