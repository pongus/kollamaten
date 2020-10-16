import React from "react";
import { node } from "prop-types";
import withStyles from "react-jss";

const styles = theme => ({
  header: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: theme.space.header,
    backgroundColor: theme.color.blue,
    zIndex: 1
  }
});

const Header = ({ classes, children }) => (
  <header className={classes.header}>{children}</header>
);

Header.propTypes = {
  children: node.isRequired
};

export default withStyles(styles)(Header);
