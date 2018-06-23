import React from "react";
import classes from "./BuildControlls.css";
import BuildControll from "./BuildControll/BuildControll";
import Button from "material-ui/Button";

const controlls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const buiidControlls = props => {
  // console.log('[BuildControlls PROPS]', props);
  return (
    <div className={classes.BuildControls}>
      <p>
        current price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controlls.map(ctrl => (
        <BuildControll
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <Button disabled={!props.purchasable} onClick={props.ordered} raised color="secondary">
        Order
      </Button>
    </div>
  );
};

export default buiidControlls;
