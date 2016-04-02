'use strict';

var React = require('react');
var classNames = require('classnames');
var $ = require('jquery');
var Navbar;

module.exports = Navbar = React.createClass({
  getDefaultProps: function () {
    return {
      width: 'auto'
    };
  },

  propTypes: {
    width: React.PropTypes.number
  },

  componentDidMount: function () {
    $(".paer").css({height: $('.full-section').outerHeight(true) + 26}); //TODO Resize listener
  },

  render: function () {
    var classString = "column " + this.props.bgClass;
    var styles = {
      width: this.props.width + "%"
    };

    return (
      <div className={classString} style={styles}>
        {this.props.children}
      </div>
    );
  }
});
