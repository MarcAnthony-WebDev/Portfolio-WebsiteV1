import Heading from '../Heading/Heading';
import { styles } from './ProjectsStyles';
import { projectsData } from './ProjectsData';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const projectVariants = {
  initial: {
    x: '100vw',
  },
  animate: {
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
    },
    hover: {
      scale: 1.5,
      transition: {
        yoyo: 10,
      },
    },
  },
};

const Projects = () => {
  const classes = styles();

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className={classes.projectsContainer}>
      <Heading text='Projects' />
      <motion.div
        whileTap={{ cursor: 'grabbing' }}
        ref={carousel}
        className={`${classes.projectsContentOuter} ${classes.carousel}`}
      >
        <motion.div
          drag='x'
          className={classes.innerCarousel}
          dragConstraints={{ right: width, left: -width }}
        >
          {projectsData.map((project, index) => {
            return (
              <motion.div
                variants={projectVariants}
                initial='initial'
                animate='animate'
                whileHover='hover'
                key={index}
                className={classes.innerCarouselSingle}
                style={{ backgroundImage: `url(${project.images})` }}
              >
                <h3>{project.name}</h3>
                <p>{project.skills}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;

{
  /* <motion.div className={classes.projectsContentOuter}>
{projectsData.map((project, index) => {
  return (
    <motion.div
      variants={projectVariants}
      initial='initial'
      animate='animate'
      whileHover='hover'
      key={index}
      className={classes.projectsContentSingle}
      style={{ backgroundImage: `url(${project.images})` }}
    >
      <h3>{project.name}</h3>
      <p>{project.skills}</p>
    </motion.div>
  );
})}
</motion.div> */
}

{
  /* <motion.div
className={`${classes.projectsContentOuter} ${classes.carousel}`}
>
<motion.div className={classes.innerCarousel}>
  {projectsData.map((project, index) => {
    <motion.div
      key={index}
      className={classes.innerCarouselSingle}
      style={{ backgroundImage: `url(${project.images})` }}
    >
      <p>{project.name}</p>
      <p>{project.skills}</p>
    </motion.div>;
  })}
</motion.div>
</motion.div> */
}
