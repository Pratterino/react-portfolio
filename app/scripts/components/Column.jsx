'use strict';

var React       = require('react');
var classNames  = require('classnames');
var Navbar;

module.exports = Navbar = React.createClass({
  getDefaultProps: function() {
    return {
      width: '100%'
    };
  },

  propTypes: function () {
    width: React.PropTypes.number
  },

  render: function () {
    var styles = {
      width: this.props.width + "%"
    };

    var classString = classNames({
      column: true,
      paer: this.props.bgClass === 'paer',
      fade: this.props.bgClass === 'crazy-gradient'
    });

    return (
      <div className={classString} style={styles}>
        {this.props.children}
      </div>
    );
  }
});
