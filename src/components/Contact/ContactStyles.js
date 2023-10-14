import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  contactContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  formHeading: {
    fontFamily: 'Electrolize',
    fontWeight: '400',
    fontSize: 'clamp(8rem, 12vw, 30rem)',
    color: 'var(--primary-color)',
    textShadow: '10px 10px 2px var(--secondary-color)',
  },
});
