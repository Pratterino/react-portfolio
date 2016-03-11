'use strict';

var React = require('react');
var Navbar;

module.exports = Navbar = React.createClass({
  render: function () {
    return (
      <header className="Navbar">
        <ul>
          <li>Erfarenheter</li>
          <li>Projekt</li>
          <li>Kontakt</li>
        </ul>
      </header>
    );
  }
});
