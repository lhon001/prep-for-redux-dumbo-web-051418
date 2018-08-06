import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/actions'

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    }
  }
}

export default connect(null, mapDispatchToProps)(Counter)
