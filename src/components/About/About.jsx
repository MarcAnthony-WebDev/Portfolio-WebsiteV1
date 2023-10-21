import { styles } from './AboutStyles';
import { motion } from 'framer-motion';

import ArrowBack from '../ArrowBack/ArrowBack';

const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Axiom', 'Framer'];

const listItemVariantsA = {
  initial: {
    y: [4, -4, 4, -4, 4, -4],
  },
  animate: {
    y: [-4, 4, -4, 4, -4, 4, -4],
    transition: { duration: 2, repeat: Infinity },
  },
};

const listItemVariantsB = {
  initial: {
    y: [-4, 4, -4, 4, -4, 4],
  },
  animate: {
    y: [4, -4, 4, -4, 4, -4, 4],
    transition: { duration: 2, repeat: Infinity },
  },
};

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
      <ArrowBack />
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
        <section className={classes.aboutContentSection}>
          <div className={classes.aboutContentText}>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: 'spring' }}
            >
              Growing up in the 90s, I was captivated by the internet. From the
              early days of dial-up connections to the ever-evolving digital
              landscape we know today, my passion for web development and design
              was ignited.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, type: 'spring' }}
            >
              As the internet continued to transform, so did my own journey. As
              an adult, I immersed myself in coding, user experience, and more,
              driven by an unending curiosity. My fascination with this
              boundless online world remains an enduring source of inspiration.
            </motion.p>
          </div>
          <div className={classes.aboutContentSkills}>
            <h3 className={classes.aboutContentSkillsHeading}>Skills</h3>
            <ul className={classes.aboutContentSkillsList}>
              {skills.map((skill, index) => {
                return (
                  <motion.li
                    variants={
                      index % 2 === 0 ? listItemVariantsA : listItemVariantsB
                    }
                    initial='initial'
                    animate='animate'
                    key={skill}
                    className={classes.aboutContentSkillsItem}
                  >
                    {skill}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
