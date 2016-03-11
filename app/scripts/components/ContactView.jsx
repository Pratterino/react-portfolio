'use strict';

var React = require('react');

var ContactView;

module.exports = ContactView = React.createClass({
  render: function () {
    return (
      <div className="ContactView">
        <p>Contact view</p>
        <p>par.strandberg@gmail.com</p>
        <p>Github</p>
      </div>
    );
  }
});
