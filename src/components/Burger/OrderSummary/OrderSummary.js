import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Button from "material-ui/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[OrderSummary.js] will update')
  }
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <p>Your Order</p>
        <p>Ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          Total Price: <strong>{this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continiue to checkout?</p>
        <Button raised color="secondary" onClick={this.props.purchaseCancelled}>
          Cancel
        </Button>
        <Button raised color="primary" onClick={this.props.purchaseContinue}>
          Continiue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
