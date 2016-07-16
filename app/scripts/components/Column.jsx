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
    $('.parallax-wrapper').css({height: window.innerHeight/2});
  },

  render: function () {
    var classString = "column " + this.props.bgClass;
    var styles = {
      width: this.props.width + "%"
    };

    return (
      <div className={classString} style={styles} id={this.props.type}>
        {this.props.children}
      </div>
    );
  }
});
