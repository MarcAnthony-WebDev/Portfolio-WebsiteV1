import React from 'react';

import Form from './Form/Form';

import { styles } from './ContactStyles';

const Contact = () => {
  const classes = styles();

  return (
    <div className={classes.contactContainer}>
      <div className=''>
        <h1 className={classes.formHeading}>Contact Me</h1>
      </div>

      <Form />
    </div>
  );
};

export default Contact;
