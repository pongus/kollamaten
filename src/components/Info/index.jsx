import React from "react";
import { number } from "prop-types";
import withStyles from "react-jss";

const styles = theme => ({
  info: {
    color: theme.color.light,
    textAlign: "center"
  }
});

const Info = ({ classes, amount }) => (
  <span className={classes.info}>
    {amount ? `Sök bland ${amount} anläggningar` : "..."}
  </span>
);

Info.propTypes = {
  amount: number
};

Info.defaultProps = {
  amount: null
};

export default withStyles(styles)(Info);
