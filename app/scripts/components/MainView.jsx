'use strict';

var React       = require('react');
var ProjectView = require('./ProjectView.jsx');
var DescText    = require('./Text.jsx');
var Column      = require('./Column.jsx');
var FullSection = require('./FullSection.jsx');
var Navbar      = require('./Navbar.jsx');
var Footer      = require('./Footer.jsx');

var MainView;

module.exports = MainView = React.createClass({
  render: function () {
    return (
      <div className="MainView">
        <FullSection>
          <Column width={30} bgClass="paer"/>
          <Column width={70} bgClass="crazy-gradient">
            <DescText />
          </Column>

        </FullSection>

        <FullSection styles={{height: "auto"}}>
          <ProjectView />
        </FullSection>

        <FullSection styles={{height: "auto", padding: "5px 0px"}}>
          <Footer />
        </FullSection>
      </div>
    );
  }
});
