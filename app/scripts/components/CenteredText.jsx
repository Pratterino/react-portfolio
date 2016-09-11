'use strict';

var React = require('react');
var CenteredText;

module.exports = CenteredText = React.createClass({

  render: function () {
    var classes = "centered-text centered-" + this.props.type;

    return (
      <div className={classes}>
        <div className="centered-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
});
