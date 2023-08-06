import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/back.jpg";

import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>AkashMeals</h1>
        <HeaderCardButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
