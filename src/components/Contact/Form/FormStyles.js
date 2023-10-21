import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxHeight: '40vh',
    margin: 'auto 0',

    maxWidth: '40vw',

    '& label': {
      fontFamily: 'Gemunu Libre, sans-serif',
      fontSize: '2rem',
      color: 'var(--tertiary-color)',
      alignSelf: 'flex-start',
      marginTop: 'auto',
      // marginBottom: '.2rem',
    },

    '& input, & textarea': {
      alignSelf: 'stretch',
    },
  },

  inputWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },

  messageWrapper: {
    width: '100%',
  },

  input: {
    color: 'var(--white-smoke)',
    marginBottom: '1rem',
    backgroundColor: '#212121',
    maxWidth: '100%',
    height: '4rem',
    padding: '1rem',
    border: '2px solid white',
    borderRadius: '.5rem',

    '&:focus': {
      color: 'var(--white-smoke)',
      backgroundColor: 'var(--secondary-color)',
      outlineColor: 'var(--primary-color)',
      boxShadow: '-3px -3px 15px var(--primary-color)',
      transition: '.2s',
      transitionProperty: 'box-shadow',
    },
  },

  textArea: {
    maxHeight: '40rem',
    height: '40rem',
    minWidth: '22.5vw',
  },

  inputBtn: {
    position: 'relative',
    textTransform: 'uppercase',
    fontSize: 'clamp(3.6vmin, 5vmin , 2.5vmax)',
    letterSpacing: '2px',
    border: '1px solid var(--primary-color)',
    // padding: '1rem 10rem',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    borderRadius: '5px',
    fontFamily: 'Gemunu Libre',
    color: 'var(--white-smoke)',
    zIndex: '1',

    textShadow:
      '0 0 5px var(--primary-color), 0 0 10px var(--primary-color), 0 0 15px var(--primary-color), 0 0 20px var(--primary-color), 0 0 30px var(--primary-color), 0 0 40px var(--secondary-color), 0 0 55px var(--secondary-color), 0 0 75px var(--secondary-color)',
    // maxWidth: '50vw',
    // minWidth: '60vw',
    width: '100%',

    margin: '1rem auto',

    '&:hover': {
      backgroundColor: 'var(--secondary-color)',
    },
  },
});
