import { styles } from './AsteroidStyles';
import { motion } from 'framer-motion';

const asteroidVariants = {
  initial: {
    x: -10,
    y: -20,
  },

  animate: {
    x: 600,
    y: 200,
    transition: { duration: 3 },
  },
};

const Asteroid = () => {
  const classes = styles();

  return (
    <motion.div className={classes.asteroidContainer}>
      <DiamondShape />
    </motion.div>
  );
};

export default Asteroid;

{
  /* <motion.svg
        style={{ zIndex: '40' }}
        variants={asteroidVariants}
        initial='initial'
        animate='animate'
        xmlns={diamondSVG}
        stroke='white'
        fill='grey'
      ></motion.svg>
{ */
}
/* <motion.div
variants={asteroidVariants}
initial='initial'
animate='animate'
className={classes.asteroid}
>
Asteroid
</motion.div>
<motion.div className={classes.asteroid}>Asteroid</motion.div>
<motion.div className={classes.asteroid}>Asteroid</motion.div>
<motion.div className={classes.asteroid}>Asteroid</motion.div>
<motion.div className={classes.asteroid}>Asteroid</motion.div> */
