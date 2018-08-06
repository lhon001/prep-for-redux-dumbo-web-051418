import React from 'react'
import Header from './components/Header'
import Counter from './components/Counter'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App
