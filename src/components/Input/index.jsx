import React, { useRef, useLayoutEffect } from "react";
import { func, string } from "prop-types";
import withStyles from "react-jss";
import { ReactComponent as Icon } from "../../images/close.svg";

const styles = theme => ({
  wrapper: {
    position: "relative",
    display: "block",
    width: `calc(100% - ${theme.space.backButton * 2}px)`,
    maxWidth: theme.space.maxWidth,
    margin: [(theme.space.header - theme.space.input) / 2, "auto"]
  },
  input: {
    width: "100%",
    height: theme.space.input,
    padding: [theme.space.small, theme.space.normal],
    backgroundColor: theme.color.light,
    border: "none",
    borderRadius: 50,
    boxShadow: "none",
    "-webkit-appearance": "none",
    outline: "none",
    color: theme.color.dark,
    fontSize: 16, // Note: Using 1.2em will automatically zoom in on phones
    "&:focus": {
      fontSize: '16px !important'
    },
    "&::placeholder": {
      color: theme.color.gray,
      fill: theme.color.gray
    },
    "@media (max-width: 320px)": {
      padding: theme.space.small
    }
  },
  reset: {
    position: "absolute",
    top: 0,
    right: 0,
    width: theme.space.small,
    height: theme.space.small,
    padding: [theme.space.small + 3, theme.space.normal],
    boxSizing: "content-box",
    borderRadius: 50,
    fill: theme.color.dark,
    cursor: "pointer",
    "&:active": {
      backgroundColor: theme.color.gray
    },
    "@media (max-width: 320px)": {
      padding: theme.space.small + 3
    }
  }
});

const Input = ({ classes, value, onChange, onReset }) => {
  const inputRef = useRef();

  useLayoutEffect(() => inputRef.current.focus());

  return (
    <div className={classes.wrapper}>
      <input
        className={classes.input}
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Ange t.ex. 1024"
      />

      {value.length > 0 && <Icon className={classes.reset} onClick={onReset} />}
    </div>
  );
};

Input.propTypes = {
  onChange: func.isRequired,
  onReset: func.isRequired,
  value: string
};

Input.defaultProps = {
  value: ""
};

export default withStyles(styles)(Input);
