'use strict';

const React = require('react');

const Footer = () => (
  <footer className="center vert-aligner" id="contact">
    <ul>
      <li>
        <a href="https://github.com/pratterino">
          <i className="fa fa-github"/>
          <span>GitHub</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/pub/p%C3%A4r-strandberg/74/94/111">
          <i className="fa fa-linkedin-square"/>
          <span>LinkedIn</span>
        </a>
      </li>
      <li>
        <i className="fa fa-envelope"/>
        <span>par.strandberg@gmail.com</span>
      </li>
    </ul>
    <ul>
      <li>
        <a href="https://www.youtube.com/tachiokuling">
          <i className="fa fa-youtube-play"/>
          <span>YouTube</span>
        </a>
      </li>
    </ul>
    <div className="dwarf-container">
      <div className="dwarf"><img src="app/images/dwarf.png"/></div>
    </div>
  </footer>
);

module.exports = Footer;
