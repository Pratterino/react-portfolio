'use strict';

var React = require('react');
var _     = require('lodash');
var FullSection;

module.exports = FullSection = React.createClass({
  render: function () {
    var classesString = this.props.addClass ? "full-section " + this.props.addClass : "full-section";
    return (
      <div className={classesString}>
        {this.props.children}
      </div>
    );
  }
});
