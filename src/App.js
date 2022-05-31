import React from 'react';
import './App.css';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div className="geral">
        <h1>Tryunfo</h1>
        <Form
          cardName="Nome da Carta"
          cardDescription="Descrição da carta"
          cardAttr1={ 12 }
          cardAttr2={ 34 }
          cardAttr3={ 56 }
          cardImage="url-to-image"
          cardRare="raro"
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
        />
      </div>
    );
  }
}

export default App;
