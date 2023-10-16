import Form from './Form/Form';
import Socials from '../Socials/Socials';

import { styles } from './ContactStyles';

const Contact = () => {
  const classes = styles();

  return (
    <div className={classes.contactContainer}>
      <h1 className={classes.formHeading}>Contact Me</h1>

      <Form />
      <Socials />
    </div>
  );
};

export default Contact;
