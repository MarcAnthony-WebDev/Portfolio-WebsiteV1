import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  aboutContainer: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    '@media (max-width:900px)': {
      justifyContent: 'flex-start',
    },
  },

  aboutHeading: {
    textAlign: 'center',
    margin: '4rem auto',
    fontFamily: 'Gemunu Libre',
    fontSize: 'clamp(5rem, 10vw, 25rem)',
    color: 'var(--primary-color)',
    textShadow: '10px 10px 2px var(--secondary-color)',
  },

  avatar: {
    display: 'block',
    backgroundImage: 'url(src/Images/Portfolio_photoPixel2.png)',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // backgroundPosition: '20% 20%',
    width: 'min(20rem, 20vw)',

    cursor: 'grab',

    '& :active': {
      cursor: 'grabbing',
    },

    '@media (max-width:900px)': {
      height: '20rem',
      backgroundSize: 'auto',
      width: 'min(12rem, 30vmax)',
    },
  },
  aboutContentImage: {
    // height: 'clamp(20vmax,40rem , 30vmax)',
    height: '100%',
    marginTop: 'auto',
  },

  aboutContent: {
    padding: '3rem',
    height: '50vh',
    width: 'min(80vw, 150rem)',
    display: 'flex',
    flexDirection: 'row',

    alignContent: 'center',
    justifyContent: 'space-around',

    '@media (max-width:900px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // flexWrap: 'wrap',
    },
  },

  aboutContentText: {
    fontFamily: 'Electrolize',
    color: 'var(--tertiary-color)',
    fontSize: 'clamp(1.3rem, 2vw, 2.2rem)',
    maxWidth: '80rem',
    minWidth: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',

    '& p': {
      letterSpacing: '.5px',
    },
  },

  aboutContentSection: {
    // height: '50rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width:900px)': {
      flexDirection: 'column',
    },
  },
  aboutContentSkillsHeading: {
    margin: '1rem 0',
    textAlign: 'center',
    fontFamily: 'Gemunu Libre',
    fontSize: 'clamp(2rem, 4vw, 2.7rem)',
  },

  aboutContentSkillsList: {
    fontFamily: 'Electrolize, sans-serif',
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    flexDirection: 'row',
    gap: '1rem',
    fontSize: 'clamp(1rem, 2vw, 1.4rem)',
  },
  aboutContentSkillsItem: {
    padding: '.5rem 1rem',
    borderRadius: '1rem',
    border: '1px solid var(--secondary-color)',
  },
});
