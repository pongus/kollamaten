import React from "react";
import { string } from "prop-types";
import withStyles from "react-jss";

const styles = theme => ({
  heading: {
    marginTop: 0,
    marginBottom: 0,
    color: theme.color.light,
    fontSize: "1.4em",
    fontWeight: "normal",
    textAlign: "center",
    "@media (max-width: 320px)": {
      fontSize: "1.2em"
    }
  }
});

const SubTitle = ({ classes, text }) => (
  <h2 className={classes.heading}>{text}</h2>
);

SubTitle.propTypes = {
  text: string.isRequired
};

export default withStyles(styles)(SubTitle);
