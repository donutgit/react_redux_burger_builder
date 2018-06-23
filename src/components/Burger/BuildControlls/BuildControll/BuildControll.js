import React from "react";
import classes from "./BuildControll.css";
import Button from "material-ui/Button";

const buildControll = props => (
  <div className={classes.BuildControll}>
    <div className={classes.Label}>{props.label}</div>
    <Button
      raised
      color="primary"
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </Button>
    <Button raised color="primary" onClick={props.added}>
      More
    </Button>
  </div>
);

export default buildControll;
