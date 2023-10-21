import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  contactContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    height: '70vh',
  },

  formHeading: {
    fontFamily: 'Electrolize',
    fontWeight: '400',
    fontSize: 'clamp(5rem, 10vw, 18rem)',
    color: 'var(--primary-color)',
    textShadow: '10px 10px 2px var(--secondary-color)',
  },
});
