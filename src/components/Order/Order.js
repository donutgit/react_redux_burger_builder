import React from "react";
import classes from "./Order.css";

const order = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }
  console.log(props)
  const ingredientOutput = ingredients.map(ing => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "5px",
          padding: "3px",
          border: "1px solid #ccc"
        }}
        key={ing.name}
      >
        {ing.name} ({ing.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>${props.price}</strong>
      </p>
    </div>
  );
};

export default order;
