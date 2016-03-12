'use strict';

var React = require('react');

var Text;

module.exports = Text = React.createClass({
  render: function () {
    return (
      <div className="desc-text center">
        <h2>Om mig</h2>
        <p>Frontend-utvecklare från Umeå, numera bosatt i Stockholm.</p>
        <p>Älskar speldesign, häftiga JavaScript-ramverk och har alltid en kopp kaffe i handen.</p>
      </div>
    );
  }
});
