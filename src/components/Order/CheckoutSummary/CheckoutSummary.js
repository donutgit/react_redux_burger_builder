import React from "react";
import classes from "./CheckoutSummary.css";
import Burger from "../../Burger/Burger";
import Button from "material-ui/Button/Button";

const checkoutSummary = props => {
  console.log('checkout summary', props)
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Wat</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button raised color="secondary" onClick={props.checkoutCancelled}>
        Cancel
      </Button>
      <Button raised color="primary" onClick={props.checkoutContinued}>
        Coninue
      </Button>
    </div>
  );
};

export default checkoutSummary;
