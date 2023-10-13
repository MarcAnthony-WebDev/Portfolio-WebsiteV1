// import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { styles } from './HomeStyles';
import Button from '../Button/Button';
import Socials from '../Socials/Socials';

const Home = () => {
  const classes = styles();

  return (
    <>
      <div className={classes.homeContainer}>
        <div className={classes.homeContainerText}>
          <h1>Welcome</h1>
          <p>I am Marcanthony, a React Developer</p>
        </div>

        <div className={classes.homeContainerStart}>
          <Link className={classes.startLink} to={`/Start`}>
            Click to Start
          </Link>
        </div>
        <Socials />
      </div>
    </>
  );
};

export default Home;
