import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <IconButton
      onClick={props.openSideDrawler}
      className={classes.MenuButton}
      aria-label="Menu"
    >
      <MenuIcon />
    </IconButton>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
