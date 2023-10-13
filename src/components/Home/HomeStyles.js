import { createUseStyles } from 'react-jss';
// import img from '../../Images/Marcanthony_PIC.png';

//Gemunu+Libre
//Electrolize

export const styles = createUseStyles({
  homeContainer: {
    height: 'clamp(40rem, 50rem, 60rem)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& h1': {
      fontFamily: 'Electrolize',
      fontWeight: '400',
      fontSize: 'clamp(8rem, 12vw, 30rem)',
      color: 'var(--primary-color)',
      textShadow: '10px 10px 2px var(--secondary-color)',
    },
  },
  homeContainerText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
    flexDirection: 'column',
    '& p': {
      fontSize: '2.1rem',
    },
    marginBottom: 'auto',
  },

  homeContainerBtns: {
    width: 'clamp(30rem, 40%, 60rem)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  startLink: {
    color: 'var(--white-smoke)',
    textDecoration: 'none',
    fontFamily: 'Electrolize',
    fontSize: '3rem',
    padding: '3rem 6rem',

    animation: '$blink 1.5s cubic-bezier(1,.06,.96,.29) infinite',
  },

  '@keyframes blink': {
    '0%': {
      opacity: '1',
    },

    '80%': {
      opacity: '0',
    },

    '100%': {
      opacity: '0',
    },
  },
});
