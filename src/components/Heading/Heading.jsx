import { styles } from './HeadingStyles';

const Heading = ({ text }) => {
  const classes = styles();

  return (
    <div className={classes.heading}>
      <h1>{text}</h1>
    </div>
  );
};

export default Heading;
