import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  aboutContainer: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  aboutHeading: {
    textAlign: 'center',
    fontFamily: 'Gemunu Libre',
    fontSize: 'clamp(8rem, 12vw, 30rem)',
    color: 'var(--primary-color)',
    textShadow: '10px 10px 2px var(--secondary-color)',
  },

  avatar: {
    backgroundImage: 'url(src/Images/Portfolio_photoPixel2.png)',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // backgroundPosition: '20% 20%',
    width: 'min(25rem, 20vw)',

    cursor: 'grab',

    '& :active': {
      cursor: 'grabbing',
    },
  },
  aboutContentImage: {
    // height: 'clamp(20vmax,40rem , 30vmax)',
    height: '100%',
  },

  aboutContent: {
    padding: '3rem',
    height: '50vh',
    width: 'min(80vw, 150rem)',
    display: 'flex',
    flexDirection: 'row',

    alignContent: 'center',
    justifyContent: 'space-around',
  },

  aboutContentText: {
    fontFamily: 'Electrolize',
    color: 'var(--tertiary-color)',
    fontSize: 'clamp(1.3rem, 2vw, 2.2rem)',
    maxWidth: '40vw',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',

    '& p': {
      letterSpacing: '.5px',
    },
  },
});
