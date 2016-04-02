'use strict';

var React = require('react');
var _     = require('lodash');
var FullSection;

module.exports = FullSection = React.createClass({
  getInitialProps: function () {
    return {
      minHeight: "auto"
    }
  },

  render: function () {
    var classesString = this.props.addClass ? "full-section " + this.props.addClass : "full-section";

    return (
      <section className={classesString} style={this.props.styles}>
        {this.props.children}
      </section>
    );
  }
});
