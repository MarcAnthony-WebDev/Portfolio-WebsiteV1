import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  heading: {
    '& h1': {
      textAlign: 'center',
      margin: 'auto 0',
      fontFamily: 'Gemunu Libre',
      fontSize: 'clamp(8rem, 12vw, 18rem)',
      color: 'var(--primary-color)',
      textShadow: '10px 10px 2px var(--secondary-color)',
    },
  },
});
