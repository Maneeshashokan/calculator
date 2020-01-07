import React from "react";
import logo from "./logo.svg";
import ButtonBarComponent from "./button-bar.component";
import OperatorsComponent from "./operators.component";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      params: ""
    };
    this.buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.operators = ["+", "-", "*", "/"];
    this.result = 0;
    this.params = "";
    this.operator = "";
  }

  onEnterInput = value => {
    this.params = this.params + value;
    let inputData = this.state.params + value;
    this.setState({ params: inputData });
  };

  onEnterOperator = operator => {
    this.operator = operator;
    switch (operator) {
      case "+":
        this.result =
          this.params !== ""
            ? this.result + parseInt(this.params)
            : this.result;

        break;
      default:
        break;
    }

    this.params = "";
    let inputData = this.state.params + operator;
    this.setState({ params: inputData });
  };

  calculateResult = () => {
    let params = parseInt(this.params);
    switch (this.operator) {
      case "+":
        this.result = this.result + params;
        this.setState({ result: this.result });
        break;
      default:
        break;
    }
    this.params = "";
  };

  onClear = () => {
    this.result = 0;
    this.params = "";
    this.operator = "";
    this.setState({
      result: 0,
      params: ""
    });
  };

  render() {
    return (
      <div className="row w-100 h-100">
        <div className="col-md-12 h-100 calculator">
          <div className="container">
            <div className="row h-100">
              <div className="result">
                <div className="pull-right result-area">
                  {this.state.result}
                </div>
                <div className="pull-right input-area">{this.state.params}</div>
              </div>
              <ButtonBarComponent onEnterInput={this.onEnterInput} onClear={this.onClear} />
              <OperatorsComponent
                onEnterOperator={this.onEnterOperator}
                calculateResult={this.calculateResult}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
