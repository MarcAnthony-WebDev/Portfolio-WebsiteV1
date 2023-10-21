// import React from 'react';
import { styles } from './ButtonStyles';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const buttonVariants = {
  initial: {
    opacity: 0,
    // x: -500,
    scale: 0.01,
  },
  animate: {
    opacity: 1,
    // x: 0,
    scale: 1,
    transition: { duration: 1.5 },
  },
  hover: {
    backgroundColor: 'var(--secondary-color)',
    transition: { duration: 0.6, type: 'spring' },
  },
};

const Button = ({ text, link, type }) => {
  const classes = styles();
  return (
    <motion.button
      variants={buttonVariants}
      initial='initial'
      animate='animate'
      whileHover='hover'
      className={classes.btn}
      type={type}
    >
      <Link to={link} className={classes.btnLink}>
        {text}
      </Link>
    </motion.button>
  );
};

export default Button;
