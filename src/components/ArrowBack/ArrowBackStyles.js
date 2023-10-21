import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  arrowBack: {
    position: 'absolute',
    top: '40px',
    left: '10px',
    color: 'var(--primary-color)',
    height: '4rem',
    width: '4rem',
    fontSize: '2vw',
    '&:hover': {
      cursor: 'pointer',
      color: 'var(--secondary-color)',
      transform: 'scale(1.1)',
      transition: '.2s',
    },
  },
});
