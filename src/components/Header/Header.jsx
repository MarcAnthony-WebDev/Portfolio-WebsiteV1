// import React from 'react';
import { motion } from 'framer-motion';

import { styles } from './HeaderStyles';
import Button from '../Button/Button';
import Links from '../Links/Links';

const Header = () => {
  const classes = styles();

  const FadeInWhenVisible = ({ children }) => {
    return (
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <FadeInWhenVisible>
      <div className={classes.headerContainer}>
        <div className={classes.imageBox}>
          <div className={classes.imageBoxImage}></div>
          <div className={classes.imageBoxSquare}></div>
        </div>
        <div className={classes.contentBox}>
          <div className={classes.contentBoxText}>
            <h1>Hello, my name is Marcanthony</h1>
            <p>A Front End React Developer</p>
          </div>
          <div className={classes.contentBoxBtns}>
            <Button text='About Me' />
            <Button text='Projects' />
          </div>
          <div className={classes.contentBoxLinks}>
            <Links />
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default Header;
