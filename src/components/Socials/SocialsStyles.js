import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  linksContainer: {
    width: 'clamp(30rem, 50%, 60rem)',
    padding: '2rem',
    marginTop: 'auto',
  },
  linksList: {
    padding: '0',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    listStyle: 'none',
  },
  linksItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5rem',
    width: '5rem',
  },
  linksLink: {
    height: '100%',
    width: '100%',
    textDecoration: 'none',
    alignSelf: 'center',
  },
});
