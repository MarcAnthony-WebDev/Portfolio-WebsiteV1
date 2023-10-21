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
      fontSize: 'clamp(6rem, 10vw, 16rem)',
      color: 'var(--primary-color)',
      textShadow: '10px 10px 2px var(--secondary-color)',
      marginBottom: 'auto',
    },
  },
  homeContainerText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
    flexDirection: 'column',

    marginBottom: 'auto',
  },

  homeContainerTextIntro: {
    fontSize: 'clamp(1.6rem, 2.5vw, 4rem)',
    color: 'var(--tertiary-color)',
    textAlign: 'center',
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
    whiteSpace: 'nowrap',

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
