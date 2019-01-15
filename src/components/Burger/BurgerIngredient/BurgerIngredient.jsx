import React from "react";
import classes from "./BurgerIngredient.css";

const burgerIngredient = props => {
  let ingredient = null;
  switch (props.tytpe) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seesds1} />
          <div className={classes.Seesds2} />
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classes.Meat} />;
    case "bacon":
      ingredient = <div className={classes.Bacon} />;
      break;
    case "salad":
      ingredient = <div className={classes.Salad} />;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};
export default burgerIngredient;
