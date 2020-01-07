import React, { Component } from "react";

class ButtonBarComponent extends Component {
  constructor(props) {
    super(props);
    this.buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  onEnterInput = event => {
    this.props.onEnterInput(event.target.value);
  };

  render() {
    return (
      <div className="button-bar col-md-8 pull-left">
        {this.buttons.map((item, index) => {
          return index % 3 === 0 ? (
            <button
              key={index}
              className="button"
              onClick={this.onEnterInput}
              value={item}
            >
              {item}
            </button>
          ) : (
            <button
              key={index}
              className="button"
              onClick={this.onEnterInput}
              value={item}
            >
              {item}
            </button>
          );
        })}
        <button className="button">0</button>
        <button className="button clear" onClick={this.props.onClear}>clear</button>
      </div>
    );
  }
}

export default ButtonBarComponent;
