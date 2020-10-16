import React from "react";
import withStyles from "react-jss";
import { ReactComponent as Icon } from "../../images/logo.svg";

const styles = theme => ({
  heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: `calc(50% - ${theme.space.input}px - ${theme.space.minor}px)`,
    maxWidth: "50%",
    margin: [0, "auto"],
    "@media (max-height: 450px)": {
      display: "none"
    }
  },
  logo: {
    width: theme.space.logo,
    height: theme.space.logo,
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

const Logo = ({ classes }) => (
  <h1 className={classes.heading}>
    <Icon className={classes.logo} alt="Kolla maten" />
  </h1>
);

export default withStyles(styles)(Logo);
