import { styles } from './ProjectsButtonStyles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const btnVariants = {
  initial: {
    opacity: 0,
    // x: -500,
    scale: 0.01,
  },
  animate: {
    opacity: 1,
    // x: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
  hover: {
    backgroundColor: 'var(--secondary-color)',
    transition: { duration: 0.2, type: 'spring' },
  },
};

const ProjectsButton = (props) => {
  const classes = styles();

  return (
    <motion.button
      whileHover='hover'
      initial='initial'
      animate='animate'
      variants={btnVariants}
      className={classes.projectBtn}
    >
      <Link target='_blank' className={classes.projectBtnLink} to={props.link}>
        {props.text}
      </Link>
    </motion.button>
  );
};

export default ProjectsButton;
