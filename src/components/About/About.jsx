import { styles } from './AboutStyles';
import { motion } from 'framer-motion';

const About = () => {
  const classes = styles();

  return (
    <div className={classes.aboutContainer}>
      <motion.div
        drag
        whileDrag={{ scale: 1.2 }}
        dragConstraints={{
          left: 30,
          right: 30,
          top: 10,
          bottom: 10,
        }}
        className={classes.avatar}
      ></motion.div>
    </div>
  );
};

export default About;
