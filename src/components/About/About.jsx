import { styles } from './AboutStyles';
import { motion } from 'framer-motion';

const About = () => {
  const classes = styles();

  const imageVariants = {
    initial: { opacity: 0, x: -200, rotateY: 0 },
    animate: {
      opacity: 1,
      x: 0,
      rotateY: 720,
      transition: { duration: 4, type: 'spring' },
    },
    whileDrag: {
      scale: 1.2,
    },
  };

  return (
    <div className={classes.aboutContainer}>
      <h1 className={classes.aboutHeading}>About Me</h1>
      <div className={classes.aboutContent}>
        <div className={classes.aboutContentImage}>
          <motion.div
            variants={imageVariants}
            drag
            whileTap={{ cursor: 'grabbing' }}
            initial='initial'
            animate='animate'
            whileDrag='whileDrag'
            dragConstraints={{
              left: 0.2,
              right: 0.2,
              top: 0.2,
              bottom: 0.2,
            }}
            className={`${classes.avatar}`}
          ></motion.div>
        </div>
        <div className={classes.aboutContentText}>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: 'spring' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vulputate ut pharetra sit amet aliquam id diam. Sed egestas egestas
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: 'spring' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vulputate ut pharetra sit amet aliquam id diam. Sed egestas egestas
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, type: 'spring' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vulputate ut pharetra sit amet aliquam id diam. Sed egestas egestas
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
