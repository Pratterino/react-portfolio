'use strict';

const React = require('react'),
      classNames = require('classnames');

const CenteredText = (props) => {
  var classes = classNames("centered-text", "centered-" + props.type);

  return (
    <div className={classes}>
      <div className="centered-wrapper">
        {props.children}
      </div>
    </div>
  );
};

module.exports = CenteredText;
