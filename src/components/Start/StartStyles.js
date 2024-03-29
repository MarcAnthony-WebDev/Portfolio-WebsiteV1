import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  startContainer: {
    position: 'relative',
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    height: '80vh',

    padding: '3rem',
  },

  // linkArrow: {
  //   position: 'absolute',
  //   top: '5',
  //   left: '20',
  // },

  startContainerHeading: {
    marginBottom: 'auto',
    '& h1': {
      textAlign: 'center',
      fontFamily: 'Gemunu Libre',
      fontSize: 'clamp(8rem, 12vw, 18rem)',
      color: 'var(--primary-color)',
      textShadow: '10px 10px 2px var(--secondary-color)',
    },
  },

  startContainerBtns: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 'auto',
  },
});
