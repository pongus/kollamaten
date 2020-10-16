import React from "react";
import { string } from "prop-types";
import withStyles from "react-jss";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../../images/arrow-left.svg";

const styles = theme => ({
  link: {
    float: "left",
    width: theme.space.backButton,
    height: theme.space.header,
    padding: theme.space.normal,
    "&:active": {
      backgroundColor: theme.color.blueDark
    }
  },
  icon: {
    width: 28,
    fill: theme.color.light
  }
});

const BackButton = ({ classes, to }) => (
  <Link to={to} className={classes.link}>
    <Icon className={classes.icon} />
  </Link>
);

BackButton.propTypes = {
  to: string
};

BackButton.defaultProps = {
  to: "/"
};

export default withStyles(styles)(BackButton);
