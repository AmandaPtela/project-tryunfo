import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nomeCarta: '',
      descricaoCarta: '',
      attr1: '',
      attr2: '',
      attr3: '',
    };
  }

  handlerNome = (event) => {
    const { target: { value, name } } = event;
    this.setState({ [name]: value });
  }

  handleCliqueButton() {
    console.log('clicou botão');
  }

  render() {
    const { nomeCarta, descricaoCarta, attr1, attr2, attr3 } = this.state;
    return (
      <div className="geral">
        <h1>Tryunfo</h1>
        <Form
          cardName={ nomeCarta }
          cardDescription={ descricaoCarta }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage="url-to-image"
          cardRare="raro"
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange={ this.handlerNome }
          onSaveButtonClick={ this.handleCliqueButton }
        />
        <Card
          cardName={ nomeCarta }
          cardDescription={ descricaoCarta }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage="url-to-image"
          cardRare="raro"
          cardTrunfo={ false }
        />
      </div>
    );
  }
}

export default App;
