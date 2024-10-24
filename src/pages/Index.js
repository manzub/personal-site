import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Index = () => (
  <Main
    description={
      'Wisdom Okon\'s personal website. 1st class graduate in Software Engineering'
      + 'freelance developer and founder of surveyvine.com.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About Me</Link>
          </h2>
          <p>
            Highly skilled and motivated web developer with 2 years of professional experience.
            Proficient in JavaScript, TypeScript, React, Redux, Node.js, Python and PHP.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        Resume available{' '}
        <a href={`${PUBLIC_URL}/docs/profile.pdf`}>here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
