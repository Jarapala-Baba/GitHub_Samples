import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component{

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: counters });
    console.log('Reset Handled')
  };

  handleDelete = (counterId) => {
    let counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const newCounter = this.state.counters.map(c => c.id === counter.id ? c.value++ : c.value)
    const counters = this.state.counters.filter(c => c.id = newCounter.id ? c = newCounter : c)
    this.setState({ counters })
    console.log('Increment Handled')
  }

  

  handleDecrement=(counter)=>
  {
    const newCounter = this.state.counters.map(c => c.id === counter.id ? (c.value>0?c.value--:c.value) : c.value)
   
    const counters = this.state.counters.filter(c => c.id = newCounter.id ? c = newCounter : c)
    this.setState({ counters })
  }

  render(){
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(counter=>counter.value>0).length} />
        <main className="container">
          <Counters key ={this.state.counters.id} counters={this.state.counters} onReset={this.handleReset} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
