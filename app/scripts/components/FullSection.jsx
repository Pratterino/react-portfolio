'use strict';

const React       = require('react'),
      classNames  = require('classnames');

const FullSection = (props) => {
    var classes = classNames("full-section", props.addClass, props.type);

    return (
      <section className={classes} style={props.styles}>
        {props.children}
      </section>
    );
};

FullSection.defaultProps = {
  minHeight: "auto"
};

module.exports = FullSection;
