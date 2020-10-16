import React from "react";
import { string } from "prop-types";
import withStyles from "react-jss";

const styles = theme => ({
  heading: {
    marginTop: theme.space.minor,
    marginBottom: theme.space.normal,
    color: theme.color.blue,
    fontSize: "1.8em",
    fontWeight: "normal"
  }
});

const Title = ({ classes, text }) => (
  <h1 className={classes.heading}>{text}</h1>
);

Title.propTypes = {
  text: string.isRequired
};

export default withStyles(styles)(Title);
