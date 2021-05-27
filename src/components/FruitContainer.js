import React, { Component } from "react";
import List from "./List";
import Input from "./Input";

class FruitContainer extends Component {
  state = {
    fruitsToDisplay: this.props.fruits,
    fruitValue: "",
  };
  handleFilterChange = (e) => {
    e.preventDefault();
    let value = e.target.value; // test toLowerCase()

    const filteredFruitList = this.props.fruits.filter((fruit) => {
      // an
      // we want to check to see if filterValue is included within the fruit
      if (fruit.includes(value.toLowerCase())) {
        return true;
      }
    });

    this.setState({
      fruitsToDisplay: filteredFruitList,
      fruitValue: value,
    });
  };

  render() {
    return (
      <div>
        <Input
          fruitInput={this.state.fruitValue}
          filter={this.handleFilterChange}
        />
        <List fruits={this.state.fruitsToDisplay} />
      </div>
    );
  }
}

export default FruitContainer;
