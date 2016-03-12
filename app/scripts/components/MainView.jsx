'use strict';

var React = require('react');
var ProjectView = require('./ProjectView.jsx');
var ContactView = require('./ContactView.jsx');
var DescText = require('./Text.jsx');
var Column = require('./Column.jsx');
var FullSection = require('./FullSection.jsx');
var Navbar = require('./Navbar.jsx');

var MainView;

module.exports = MainView = React.createClass({
  render: function () {
    return (
      <div className="MainView">
        <FullSection>
          <Navbar />

          <Column width={30} bgClass="paer"/>
          <Column width={70} bgClass="crazy-gradient">
            <DescText />
          </Column>

        </FullSection>

        <FullSection>
          <ProjectView />
        </FullSection>

        <FullSection>
          <ContactView />
        </FullSection>
      </div>
    );
  }
});
