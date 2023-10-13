// import { useState } from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { motion } from 'framer-motion';
import { styles } from './AppStyles';
import { motion } from 'framer-motion';

import Home from './components/Home/Home';
import { BrowserNotSupported } from '@mui/icons-material';
import Start from './components/Start/Start';

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
