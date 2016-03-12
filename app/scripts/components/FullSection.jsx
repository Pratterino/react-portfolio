'use strict';

var React = require('react');
var _     = require('lodash');
var FullSection;

module.exports = FullSection = React.createClass({
  getInitialProps: function () {
    return {
      height: "100vh"
    }
  },

  render: function () {

    var classesString = this.props.addClass ? "full-section " + this.props.addClass : "full-section";
    return (
      <div className={classesString} style={this.props.styles}>
        {this.props.children}
      </div>
    );
  }
});
