// import React from 'react';
import { styles } from './ButtonStyles';

const Button = (props) => {
  const classes = styles();
  return <button className={classes.btn}>{props.text}</button>;
};

export default Button;
