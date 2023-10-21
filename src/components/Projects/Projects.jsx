import Heading from '../Heading/Heading';
import { styles } from './ProjectsStyles';
import { projectsData } from './ProjectsData';
import ProjectsButton from '../ProjectsButton/ProjectsButton';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const projectVariants = {
  initial: {
    scale: 1,
  },
  animate: {
    transition: {
      type: 'spring',
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      yoyo: 10,
      duration: 0.3,
    },
  },
};

const Projects = () => {
  const classes = styles();

  const [width, setWidth] = useState(0);
  const [singleHover, setSingleHover] = useState(false);
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
          dragConstraints={{ right: 50, left: -width }}
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
                onMouseEnter={() => setSingleHover(true)}
                onMouseLeave={() => setSingleHover(false)}
              >
                {singleHover && (
                  <div className={classes.innerCarouselSingleOverlay}>
                    <h3 className={classes.projectHeading}>{project.name}</h3>
                    <p className={classes.projectDescription}>
                      {project.description}
                    </p>
                    <div className={classes.innerCarouselSingleLinks}>
                      <p className={classes.siteDescription}>
                        {project.siteDescription}
                      </p>
                      <ProjectsButton
                        text='Live Site'
                        link={project.liveSiteLink}
                      />
                      <ProjectsButton link={project.githubLink} text='GitHub' />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
