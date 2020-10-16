import React from "react";
import { number } from "prop-types";
import withStyles from "react-jss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Logo from "../Logo";
import SubTitle from "../SubTitle";
import FakeInput from "../FakeInput";
import Info from "../Info";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: theme.space.normal,
    backgroundColor: theme.color.blue
  },
  link: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: theme.space.normal,
    color: theme.color.light
  }
});

const HomeRoute = ({ classes, amount }) => (
  <article className={classes.container}>
    <Helmet title="Kolla maten" />
    <Logo />
    <SubTitle text="Vad betyder märkningen?" />
    <FakeInput />
    <Info amount={amount} />
    <Link to="/om" className={classes.link}>
      Om Kolla maten
    </Link>
  </article>
);

HomeRoute.propTypes = {
  amount: number
};

HomeRoute.defaultProps = {
  amount: null
};

export default withStyles(styles)(HomeRoute);
