/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */

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
          <a href="mailto:wizzdom@surveyvine.com">wizzdom@surveyvine.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I’m Wisdom. I’m a
        <a href="https://www.beds.ac.uk/">First-Class Software Engineering graduate from the University of Bedfordshire</a>
        and a full-stack developer with experience across frontend, backend, and cloud deployment.
        I’ve previously worked as a Software Engineer at <a href="#emptylink">Thejiro Limited</a>
        and taken on freelance projects via Upwork and other platforms.
      </p>
      <p>
        These days, I spend most of my time building fun (and sometimes dangerously experimental) Python scripts,
        exploring AI systems, automation, and agent-style workflows. I’m particularly interested in understanding
        how things work under the hood — not just using tools, but building and bending them to solve interesting problems.
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
