import React, { Component } from "react";

class Counter extends Component {


  render() {
    return (
        <div>
      
        <span className={this.getClasses()}>{this.formatCount()} </span>
        <button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-seconday btn-sm m-2">Decrease </button>
        <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-seconday btn-sm m-2">Increment </button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

      </div>
     
    );
  }

    getClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h>Zero</h> : value;
  }
}

export default Counter;
