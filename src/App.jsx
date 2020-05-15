import React from 'react';

import Header from './components/Header';
import Catalog from './components/Catalog';
import data from './data/data.json'

import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      catalog: [],
      itemCount: 0
    };
  }

  componentDidMount() {
    this.setState({ catalog: data });
    this.setState({itemCount: Object.keys(data).length}) ;
  }
 
  render() {
    
    return (
      <div className="app" data-testid="app">
        <Header/>
        <section className="catalog container">
          <div className="catalog__content">
            <div className="catalog__count"> {this.state.itemCount} Itens</div>
            <div className="catalog__box">
              <Catalog
              catalog={this.state.catalog}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
