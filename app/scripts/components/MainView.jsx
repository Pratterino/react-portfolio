'use strict';

var React = require('react');
var ProjectView = require('./ProjectView.jsx');
var ContactView = require('./ContactView.jsx');
var FullSection = require('./FullSection.jsx');
var Navbar = require('./Navbar.jsx');

var MainView;

module.exports = MainView = React.createClass({
  render: function () {
    return (
      <div className="MainView">
        <Navbar />
        <FullSection addClass="paer">
          <ProjectView />
        </FullSection>

        <FullSection>
          <ContactView />
        </FullSection>
      </div>
    );
  }
});
