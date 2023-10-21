import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  projectBtn: {
    position: 'relative',
    textTransform: 'uppercase',
    fontSize: 'clamp(2vmin, 3vmin , 2vmax)',
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
    width: '30vmin',

    margin: '1rem',
  },
  projectBtnLink: {
    textDecoration: 'none',
    color: 'white',
    fontFamily: 'Electrolize',
    display: 'block',
    width: '100%',
  },
});
