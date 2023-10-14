import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxHeight: '40vh',

    maxWidth: '40vw',

    '& label': {
      fontFamily: 'Gemunu Libre, sans-serif',
      fontSize: '2rem',
      color: 'var(--tertiary-color)',
      alignSelf: 'flex-start',
      marginTop: 'auto',
      marginBottom: '.2rem',
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
    backgroundColor: '#212121',
    maxWidth: '100%',
    height: '4rem',
    padding: '1rem',
    border: '2px solid white',
    borderRadius: '.5rem',

    '&:focus': {
      color: 'var(--primary-color)',
      backgroundColor: 'var(--secondary-color)',
      outlineColor: 'var(--primary-color)',
      boxShadow: '-3px -3px 15px var(--primary-color)',
      transition: '.2s',
      transitionProperty: 'box-shadow',
    },
  },

  textArea: {
    maxHeight: '40rem',
  },
});
