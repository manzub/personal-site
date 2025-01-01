/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Michael D'Angelo via email @ hi@mldangelo.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
        <p>You can also read some of my published articles at <a href="https://medium.com/@jeddachppc" _target="blank" rel="noreferrer">Medium.com</a></p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
