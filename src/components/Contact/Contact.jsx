import Form from './Form/Form';
import Socials from '../Socials/Socials';
import ArrowBack from '../ArrowBack/ArrowBack';

import { styles } from './ContactStyles';

const Contact = () => {
  const classes = styles();

  return (
    <div className={classes.contactContainer}>
      <ArrowBack top='0px' left='0px' />
      <h1 className={classes.formHeading}>Contact Me</h1>

      <Form />
      <Socials />
    </div>
  );
};

export default Contact;
