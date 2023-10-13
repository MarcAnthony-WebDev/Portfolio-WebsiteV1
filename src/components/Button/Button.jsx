// import React from 'react';
import { styles } from './ButtonStyles';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const Button = ({ text, link }) => {
  const classes = styles();
  return (
    <motion.button
      initial={{
        opacity: 0,
        // x: -500,
        scale: 0.01,
      }}
      animate={{
        opacity: 1,
        // x: 0,
        scale: 1,
      }}
      whileHover={{
        backgroundColor: 'var(--secondary-color)',
        transition: { duration: 0.3 },
      }}
      transition={{ duration: 2 }}
      className={classes.btn}
    >
      <Link to={link} className={classes.btnLink}>
        {text}
      </Link>
    </motion.button>
  );
};

export default Button;
