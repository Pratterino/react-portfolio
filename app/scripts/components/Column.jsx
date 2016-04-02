'use strict';

var React = require('react');
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
    $('.column.paer').css({height: $('.column.fade').outerHeight(true) + 28});
    $('.parallax-wrapper').css({height: window.innerHeight/2});
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
