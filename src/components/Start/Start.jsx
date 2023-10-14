import Button from '../Button/Button';
import { styles } from './StartStyles';
// import { Link } from 'react-router-dom';

const Start = () => {
  const classes = styles();

  return (
    <div className={classes.startContainer}>
      <div className={classes.startContainerHeading}>
        <h1>Start Menu</h1>
      </div>
      <div className={classes.startContainerBtns}>
        <Button link='/About' text='About' />
        <Button link='/Projects' text='Projects' />
        <Button link='/Contact' text='Contact' />
      </div>
    </div>
  );
};

export default Start;
