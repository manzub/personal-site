import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Wisdom Okon</h2>
        <p>
          <a href="mailto:wizzdom@surveyvine.com">wizzdom@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Wisdom. I am a{' '}
        <a href="https://www.beds.ac.uk/">1st class Bedfordshire</a> graduate, and the co-founder and CTO of{' '}
        <a href="https://surveyvine.com">surveyvine.com</a>. Previously, I
        was a Software Engineer at <a href="#emptylink">Thejiro Limited</a>,
        and a freelancer at <a href="https://www.upwork.com/">Upwork</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Wisdom Okon <Link to="/">wizzdom.dev</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
