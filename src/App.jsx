// import { useState } from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { motion } from 'framer-motion';
import { styles } from './AppStyles';
import { motion } from 'framer-motion';

import Home from './components/Home/Home';

import Start from './components/Start/Start';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  const classes = styles();

  const FadeInWhenVisible = ({ children }) => {
    return (
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      <BrowserRouter>
        <div className={classes.appOuter}>
          <div className={classes.appInner}>
            <div className={classes.appWindow}>
              {/* <Home /> */}
              <FadeInWhenVisible>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Start' element={<Start />} />
                  <Route path='About' element={<About />} />
                  <Route path='/Projects' element={<Projects />} />
                  <Route path='/Contact' element={<Contact />} />
                </Routes>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
        {/* <motion.div
        className={classes.cursor}
        variants={variants}
        animate={cursorVariant}
      /> */}
        {/* <Routes>
        <Route path='Home' element={<Home />} />
      </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
