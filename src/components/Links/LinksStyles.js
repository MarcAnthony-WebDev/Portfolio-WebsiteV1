import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  linksContainer: {},
  linksList: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    listStyle: 'none',
  },
  linksItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5rem',
    width: '5rem',
    borderRadius: '50%',
    backgroundColor: 'var(--dark-grey)',
  },
  linksLink: {
    height: '100%',
    width: '100%',
    textDecoration: 'none',
    alignSelf: 'center',
  },
});
