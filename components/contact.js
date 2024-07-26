import React, { useRef } from 'react';
import "@fontsource/poppins";
import emailjs from '@emailjs/browser';
import styles from "./contact.module.css";
function contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_7a9kti1', form.current, {
        publicKey: 'G1XCeelsqotcWlcWZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
 
      <div className={styles.contact}>

        <div className="">
          {/* <h1> Contact Us</h1> */}

          <form className={styles.contactForm} ref={form} onSubmit={sendEmail} method="POST">
            <label className={styles.label} htmlFor="name">
              Full Name
            </label>
            <input
              className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
              name="name"
              placeholder="   Enter full name..."
              type="text"
            />
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
              name="email"
              placeholder="   Enter email..."
              type="email"
            />
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
              rows="6"
              placeholder="   Enter message..."
              name="message"
              required
            ></textarea>
            <button className={styles.formBtn} type="submit">
              {" "}
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default contact;



