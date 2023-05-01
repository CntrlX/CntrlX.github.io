// import { motion } from "framer-motion";

import Faq from "../Faq/Faq";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    // <motion.section
    //   initial={{ opacity: 0, x: 100 }}
    //   whileInView={{ opacity: 1, x: 0 }}
    //   transition={{ duration: 0.5, delay: 0.5 }}
    //   id="contact"
    //   className={classes.contact}
    // >
    <section id="contact" className={classes.contact}>
      <div className={classes.contactBox}>
        <div className={classes.contentBox}>
          <Faq />
          {/* <div className={classes.persons}>

            <div className={classes.personBox}>
              <h3 className={classes.personHeading}>Shamsudheen</h3>
              <div className={classes.details}>
                <p>
                  Chairman<br></br>Union KMCT
                </p>
                <a className={classes.anchor} href="tel:+917012824370">
                  +91 7012 824 370
                </a>
              </div>
            </div>

            <div className={classes.personBox}>
              <h3 className={classes.personHeading}>Sithara Beegam</h3>
              <div className={classes.details}>
                <p>
                  Vice Chairman<br></br>Union KMCT
                </p>
                <a className={classes.anchor} href="tel:+918592002134">
                  +91 8592 002 134
                </a>
              </div>
            </div>
          </div> */}

          <div className={classes.mapBox}>
            <iframe
              className={classes.map}
              title="Kmct Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.153609468383!2d75.95371039076552!3d11.31224067999375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba643af748ee911%3A0x542a35d383bb1999!2sKMCT%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1652027577733!5m2!1sen!2sin"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
