// import React from 'react';
import { styles } from './SocialsStyles';
import { motion } from 'framer-motion';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

const Socials = () => {
  const classes = styles();

  const hoverEffect = {
    y: -8,
    transition: { duration: 0.2 },
  };

  const tapEffect = {
    scale: 0.9,
  };

  return (
    <div className={classes.linksContainer}>
      <ul className={classes.linksList}>
        <li className={classes.linksItem}>
          <motion.a
            whileHover={hoverEffect}
            whileTap={tapEffect}
            href='https://github.com/MarcAnthony-WebDev'
            className={classes.linkslink}
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon
              sx={{
                height: '100%',
                width: '100%',
                fill: 'var(--secondary-color)',
              }}
            />
          </motion.a>
        </li>
        <li className={classes.linksItem}>
          <motion.a
            whileHover={hoverEffect}
            whileTap={tapEffect}
            href='https://www.linkedin.com/in/marcanthony-tumminello/'
            className={classes.linkslink}
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon
              sx={{
                height: '100%',
                width: '100%',
                fill: 'var(--secondary-color)',
              }}
            />
          </motion.a>
        </li>
        <li className={classes.linksItem}>
          <motion.a
            whileHover={hoverEffect}
            whileTap={tapEffect}
            href='mailto:marcanthony.webdev@gmail.com'
            className={classes.linkslink}
            target='_blank'
            rel='noreferrer'
          >
            <EmailIcon
              sx={{
                height: '100%',
                width: '100%',
                fill: 'var(--secondary-color)',
              }}
            />
          </motion.a>
        </li>
        <li className={classes.linksItem}>
          <motion.a
            whileHover={hoverEffect}
            whileTap={tapEffect}
            href='https://twitter.com/MarcTumminello'
            className={classes.linkslink}
            target='_blank'
            rel='noreferrer'
          >
            <TwitterIcon
              sx={{
                height: '100%',
                width: '100%',
                fill: 'var(--secondary-color)',
              }}
            />
          </motion.a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
