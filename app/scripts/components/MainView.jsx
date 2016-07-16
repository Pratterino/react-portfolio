'use strict';

var React = require('react');
var ProjectView = require('./ProjectView.jsx');
var DescText = require('./Text.jsx');
var Column = require('./Column.jsx');
var FullSection = require('./FullSection.jsx');
var Footer = require('./Footer.jsx');

var MainView;

module.exports = MainView = React.createClass({
  render: function () {
    return (
      <div className="page-wrapper">
        <div className="content">
          <FullSection addClass="no-min-height">
            <Column width={30} bgClass="paer"/>
            <Column width={70} bgClass="fade" type="about">
              <DescText />
            </Column>
          </FullSection>

          <ProjectView type="web"/>
          <ProjectView type="game"/>
          <ProjectView type="music"/>

          <div className="parallax-wrapper">
            <Column width={100} bgClass="outdoors"/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
});
