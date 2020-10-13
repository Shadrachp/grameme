import React, { Component } from 'react';
import Main from './components/Main';
import '../stylesheets/App.css';


class App extends Component {
  constructor( props ) {
    super( props );

    this.state = ({
      title: 'Grameme',
    });
  }

  render() {

    return (
      <div className="App">
        <title>{this.state.title}</title>
        <Main title={this.state.title} />
      </div>
    );
  }
}

export default App;
