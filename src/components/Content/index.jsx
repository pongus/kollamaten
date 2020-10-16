import React from "react";
import { bool, node } from "prop-types";
import withStyles from "react-jss";

const styles = theme => ({
  "@global": {
    a: {
      color: theme.color.blue
    },
    ul: {
      marginTop: 0,
      marginBottom: 0,
      paddingLeft: 0,
      listStyle: "none"
    },
    dl: {
      marginTop: 0,
      marginBottom: 0
    },
    dt: {
      color: theme.color.blue,
      fontSize: ".9em"
    },
    dd: {
      marginBottom: theme.space.small,
      marginLeft: 0,
      fontSize: "1.1em"
    }
  },
  content: ({ hasMaxWidth, hasMargins }) => ({
    position: "absolute",
    top: 70,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: `calc(100% - ${theme.space.header}px)`,
    maxWidth: hasMaxWidth ? theme.space.maxWidth : "none",
    margin: "0 auto",
    padding: hasMargins ? theme.space.normal : 0,
    backgroundColor: theme.color.light,
    color: theme.color.dark,
    fontSize: "1.1em",
    overflow: "auto",
    "-webkit-overflow-scrolling": "touch"
  })
});

const Content = ({ classes, children }) => (
  <article className={classes.content}>{children}</article>
);

Content.propTypes = {
  children: node.isRequired,
  hasMargins: bool,
  hasMaxWidth: bool
};

Content.defaultProps = {
  hasMargins: true,
  hasMaxWidth: true
};

export default withStyles(styles)(Content);
