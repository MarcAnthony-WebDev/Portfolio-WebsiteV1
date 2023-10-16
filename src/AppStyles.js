import { createUseStyles } from 'react-jss';
// import { createKeyframes } from 'jss';

// const tvStatic = createKeyframes({
//   '0%': { backgroundSize: '100% 100%' },
//   '100%': { backgroundSize: '200% 200%' },
// });

export const styles = createUseStyles({
  appOuter: {
    height: '90vh',
    width: '90vw',
    border: '2rem ridge #65048c',
    borderRadius: '.5rem',
    backgroundColor: '#000',
    color: 'white',

    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  appInner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    height: '100%',
    width: '100%',
    borderRadius: '10% / 20%',
  },
  appWindow: {
    // position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'repeating-conic-gradient(#1a1a1a,black 0.00013%)',
    backgroundColor: 'white',
    overflow: 'hidden',

    animation: '$tvStatic 2s linear infinite',
    height: '85%',
    width: '92.5%',
  },

  // cursor: {
  //   border: '3px solid var(--white-smoke)',
  //   height: '3.2rem',
  //   width: '3.2rem',
  //   borderRadius: '50%',
  //   position: 'fixed',
  //   top: '0',
  //   left: '0',
  // },

  '@keyframes tvStatic': {
    '0%': {
      backgroundSize: '100% 100%',
    },
    '100%': {
      backgroundSize: '200% 200%',
    },
  },
});
