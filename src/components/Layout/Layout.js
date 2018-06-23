import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Tollbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
   sideDrawler: false  
  }
  sideDrawlerOpem = () => {
    this.setState({ sideDrawler: true })
  }
  sideDrawlerClosed = () => {
    this.setState((prevState) => {
      return {sideDrawler: !prevState.sideDrawler}
    })
  }


  render() {
    return (
      <Aux>
        <Toolbar openSideDrawler={this.sideDrawlerOpem}/>
        <SideDrawer open={this.state.sideDrawler} closed={this.sideDrawlerClosed}  />
        <main className={classes.Layout}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
