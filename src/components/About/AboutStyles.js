import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  avatar: {
    backgroundImage: 'url(src/Images/Portfolio_photoPixel2.png)',
    height: 'clamp(40vh, 60rem, 40vmax)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '10% 10%',
    width: '50rem',
    cursor: 'grab',
  },
});
