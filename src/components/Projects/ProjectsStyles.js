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
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    backgroundColor: 'aliceblue',
    padding: '3rem',
    height: '50vh',
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
    backgroundColor: 'var(--secondary-color)',
  },

  innerCarouselSingle: {
    backgroundColor: 'red',
    minHeight: '40rem',
    width: '100rem',
    padding: '4rem',
    backgroundSize: 'cover',

    // pointerEvents: 'none',
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
