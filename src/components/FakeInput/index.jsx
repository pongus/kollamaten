import React from "react";
import withStyles from "react-jss";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../../images/search.svg";

const styles = theme => ({
  input: {
    width: "100%",
    height: theme.space.input + 2,
    maxWidth: theme.space.maxWidth,
    margin: [theme.space.large, "auto"],
    padding: [theme.space.small, theme.space.normal],
    backgroundColor: theme.color.light,
    borderRadius: 50,
    outline: "none",
    color: theme.color.dark,
    fontSize: "1.2em",
    lineHeight: 1.2,
    textAlign: "center",
    textDecoration: "none",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    "@media (max-width: 375px)": {
      margin: [theme.space.normal, "auto"]
    },
    "@media (max-width: 320px)": {
      fontSize: "1.1em"
    },
    "@media (max-height: 450px)": {
      margin: [theme.space.normal, "auto"]
    }
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: -3,
    marginRight: 5,
    fill: theme.color.dark,
    "@media (max-width: 320px)": {
      display: "none" // Makes more room for the "placeholder"
    }
  }
});

const FakeInput = ({ classes }) => (
  <Link to="/lista" className={classes.input}>
    <Icon className={classes.icon} /> Sök kod, namn eller plats
  </Link>
);

export default withStyles(styles)(FakeInput);
