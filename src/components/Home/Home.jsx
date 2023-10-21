// import React from 'react';

import { Link } from 'react-router-dom';

import { styles } from './HomeStyles';

import Socials from '../Socials/Socials';
import { collapseClasses } from '@mui/material';

const Home = () => {
  const classes = styles();

  return (
    <>
      <div className={classes.homeContainer}>
        <div className={classes.homeContainerText}>
          <h1>Welcome</h1>
          <p className={classes.homeContainerTextIntro}>
            I&apos;m Marcanthony, a React Developer.
          </p>
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
