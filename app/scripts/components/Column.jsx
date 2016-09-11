'use strict';

var React = require('react');
var Column;

module.exports = Column = React.createClass({
  getDefaultProps: function () {
    return {
      width: 'auto'
    };
  },

  propTypes: {
    width: React.PropTypes.number.isRequired,
    type: React.PropTypes.string
  },

  render: function () {
    var classString = "column type-" + this.props.type;
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
