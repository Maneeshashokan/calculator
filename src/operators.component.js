import React, { Component } from "react";

class OperatorsComponent extends Component {
  constructor(props) {
    super(props);
    this.operators = ["+", "-", "*", "/"];
  }

  onEnterOperator=(event)=>{
      this.props.onEnterOperator(event.target.value)
  }

  render() {
    return (
      <div className="operator-bar col-md-4 pull-left">
        {this.operators.map((item, index) => {
          return index % 2 === 0 ? (

              <button key={index} className="button" onClick={this.onEnterOperator} value={item}>{item}</button>
            
          ) : (
            <button key={index} className="button" onClick={this.onEnterOperator} value={item}>{item}</button>
          );
        })}
        <button className="button sum" onClick={this.props.calculateResult}>=</button>
      </div>
    );
  }
}

export default OperatorsComponent;
