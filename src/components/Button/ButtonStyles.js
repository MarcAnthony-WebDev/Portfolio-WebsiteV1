import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  btn: {
    position: 'relative',
    textTransform: 'uppercase',
    fontSize: 'clamp(3.6vmin, 5vmin , 2.5vmax)',
    letterSpacing: '2px',
    border: '1px solid var(--primary-color)',
    padding: '1rem 10rem',
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
    width: '55vmin',

    margin: '1rem auto',
    // transition: '.3s all',

    // '&:before': {
    //   content: '""',
    //   transition: '.5s all ease',
    //   position: 'absolute',
    //   top: '0',
    //   left: '50%',
    //   right: '50%',
    //   bottom: '0',
    //   opacity: '0',
    //   backgroundColor: 'var(secondary-color)',
    //   zIndex: '-1',
    // },

    // '&:hover': {
    //   color: 'green',
    //   '&:before': {
    //     transition: '.5s all ease',
    //     left: '0',
    //     right: '0',
    //     opacity: '1',
    //   },
    // },

    // '&:focus': {
    //   '&:before': {
    //     transition: '.5s all ease',
    //     left: '0',
    //     right: '0',
    //     opacity: '1',
    //   },
    // },

    // '&:active': {
    //   transform: 'scale(.9)',
    // },

    // '& span': {
    //   display: 'block',
    //   width: 'auto',
    //   boxShadow: '0px 0px 64px -2px rgba(68,36,234,0.8)',
    // },
  },

  btnLink: {
    textDecoration: 'none',
    color: 'white',
    fontFamily: 'Electrolize',
  },
});
