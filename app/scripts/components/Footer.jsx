'use strict';

var React = require('react');
var Footer;

module.exports = Footer = React.createClass({
  render: function () {
    return (
      <footer className="center">
        <ul>
          <li>
            <a href="https://github.com/pratterino">
              <i className="fa fa-github"></i>
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/pub/p%C3%A4r-strandberg/74/94/111">
              <i className="fa fa-linkedin-square"></i>
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
            <span>par.strandberg@gmail.com</span>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.youtube.com/tachiokuling">
              <i className="fa fa-youtube-play"></i>
              <span>YouTube</span>
            </a>
          </li>
        </ul>
        <div className="dwarf"><img src="img/dwco/dwarf.png"/></div>
      </footer>
    );
  }
});
