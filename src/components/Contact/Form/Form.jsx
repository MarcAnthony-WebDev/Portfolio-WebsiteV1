import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../../Button/Button';

import { styles } from './FormStyles';
import { motion } from 'framer-motion';

const Form = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const classes = styles();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_b7vny6g',
        'template_kkx8g06',
        form.current,
        'X7eZ_OAb0rZPmlE0s'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormValues({
      fullName: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <form className={classes.form} ref={form} onSubmit={sendEmail}>
        <motion.label
          whileFocus={{ scale: 1.5 }}
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.7 }}
        >
          Name:
        </motion.label>
        <motion.input
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.7 }}
          className={`${classes.input}`}
          onChange={(e) =>
            setFormValues({ ...formValues, fullName: e.target.value })
          }
          type='text'
          name='user_name'
          value={formValues.fullName}
        />
        <motion.label
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
        >
          Email:
        </motion.label>
        <motion.input
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className={`${classes.input}`}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
          type='email'
          name='user_email'
          value={formValues.email}
        />

        <motion.label
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.25 }}
        >
          Message:
        </motion.label>
        <motion.textarea
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.25 }}
          className={`${classes.input} ${classes.textArea}`}
          onChange={(e) => setFormValues(e.target.value)}
          name='message'
          value={formValues.message}
          cols='50'
          maxLength='750'
        />
        <input className={classes.inputBtn} type='submit' value='Send Email' />
        {/* <Button type='submit' value='Send Email' text='Submit' /> */}
      </form>
    </>
  );
};

export default Form;
