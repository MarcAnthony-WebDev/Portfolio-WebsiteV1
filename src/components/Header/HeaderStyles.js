import { createUseStyles } from 'react-jss';
// import img from '../../Images/Marcanthony_PIC.png';

export const styles = createUseStyles({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',

    height: '100vh',
    width: '100%',
  },
  //imageBox styling
  imageBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '-1',
    position: 'relative',

    height: 'clamp(30rem, 50%, 70rem)',
    width: 'clamp(30rem, 40%, 50rem)',
    backgroundColor: 'lightblue',
    padding: '3rem',
    borderRadius: '1rem',
    fontFamily: 'Fauna One',
    fontSize: '3rem',
  },
  imageBoxSquare: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%) rotate(30deg)',
    zIndex: '1',
    backgroundColor: 'var(--orange)',
    height: '100%',
    width: '100%',
  },
  imageBoxImage: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundImage: 'url(src/Images/20220507_192819.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    zIndex: '3',
    height: '100%',
    width: '100%',
    borderRadius: '50%',
  },
  //contentBox styling
  contentBox: {
    padding: '3rem',
    backgroundColor: 'var(--grey)',
    boxShadow: '0px 0px 10px black',
  },
  contentBoxText: {
    fontFamily: 'Cinzel',
    '& h1': {
      fontSize: 'clamp(2.2rem, 3vw, 4rem)',
      color: 'var(--dark-grey)',
    },
    '& p': {
      fontSize: 'clamp(1.6rem, 2vw, 3rem)',
      color: 'var(--dark-grey)',
    },
  },
  contentBoxBtns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
