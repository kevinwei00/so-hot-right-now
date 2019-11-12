import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import DocumentUtils from '../../utils/document-utils';

export default function About() {
  DocumentUtils.scrollToTop();
  return (
    <section className="About">
      <h2 className="text-center">What's This For?</h2>
      <div className="About__content">
        This site shows current job demand for popular web technologies. Whether you are a
        student or a professional web developer, this site can help you make informed
        decisions about what skills are worthwhile to pick up. The web development
        landscape is always changing, so this site makes no prescriptions about what you
        should learn, but rather shows you objective numbers.
      </div>
      <div className="About__content text-center">
        <Link to="/">
          <button>
            <div>Okay, show me</div>
            <div>what's hot!</div>
          </button>
        </Link>
      </div>
      <div className="About__content text-center">
        <div>So Hot Right Now API is powered by</div>
        <a href="http://www.indeed.com/" target="_blank" rel="noopener noreferrer">
          <div className="indeedLogo"></div>
        </a>
      </div>
    </section>
  );
}
