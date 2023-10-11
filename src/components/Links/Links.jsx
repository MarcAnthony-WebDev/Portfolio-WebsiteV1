// import React from 'react';
import { styles } from './LinksStyles';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Links = () => {
  const classes = styles();

  return (
    <div className={classes.linksContainer}>
      <ul className={classes.linksList}>
        <li className={classes.linksItem}>
          <a
            href='https://github.com/MarcAnthony-WebDev'
            className={classes.linkslink}
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon
              sx={{ height: '100%', width: '100%', fill: 'var(--orange)' }}
            />
          </a>
        </li>
        <li className={classes.linksItem}>
          <a
            href='https://www.linkedin.com/in/marcanthony-tumminello/'
            className={classes.linkslink}
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon
              sx={{ height: '100%', width: '100%', fill: 'var(--orange)' }}
            />
          </a>
        </li>
        <li className={classes.linksItem}>
          <a
            href='mailto:marcanthony.webdev@gmail.com'
            className={classes.linkslink}
            target='_blank'
            rel='noreferrer'
          >
            <EmailIcon
              sx={{ height: '100%', width: '100%', fill: 'var(--orange)' }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
