import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  projectsContainer: {
    display: 'flex',
    height: '80vh',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },

  projectsContentOuter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '2rem',
    backgroundColor: 'transparent',
    padding: '3rem',
    height: '50vh',
    borderRadius: '.5rem',

    width: '70vw',
  },

  carousel: {
    cursor: 'grab',
    overflow: 'hidden',
  },

  innerCarousel: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
  },

  innerCarouselSingle: {
    borderRadius: '1rem',
    minHeight: '40rem',
    width: '100rem',
    padding: '4rem',
    backgroundSize: 'cover',

    '@media (max-width: 750px)': {
      width: '40rem',
      minHeight: '30rem',
    },
    '@media (max-width: 400px)': {
      width: '25rem',
      minHeight: '30rem',
    },
    // pointerEvents: 'none',
  },
  innerCarouselSingleOverlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.65)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: '.5rem',
    padding: '1rem',
    gap: '1rem',
    transition: 'all 0.5s ease-in-out',
    // '&:hover': {
    //   backgroundColor: 'rgba(0,0,0,0.8)',
    // },
  },
  projectHeading: {
    fontFamily: 'Electrolize, sans-serif',
  },

  projectDescription: {
    fontFamily: 'Gemunu Libre, sans-serif',
    padding: '1rem',
    width: '75%',
    borderRadius: '.5rem',
    fontSize: 'clamp(2vmin, 2.8vmin, 2.5vmax)',
    color: 'var(--tertiary-color)',

    '@media (max-width: 1000px)': {
      width: '50%',
    },

    '@media (max-width: 750px)': {
      width: '100%',
    },
  },

  // projectsContentSingle: {
  //   padding: '3rem',
  //   backgroundSize: 'cover',
  //   height: '100%',
  //   width: '100%',
  //   backgroundColor: 'purple',
  //   borderRadius: '.4rem',
  // },
});
