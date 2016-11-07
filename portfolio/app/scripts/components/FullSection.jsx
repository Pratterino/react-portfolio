'use strict';

const React       = require('react'),
      classNames  = require('classnames');

class FullSection extends React.Component {
    constructor(props) {
        super(props);
        this.getFadeForBackgroundStyle = this.getFadeForBackgroundStyle.bind(this);
    }

    getFadeForBackgroundStyle() {
        if (this.props.type === "about") {
            return {
                overflow: 'hidden',
                background: `radial-gradient(rgba(180, 110, 220, 0.5), rgba(35, 50, 120, 0.6)), url(${this.props.backgroundImage}) no-repeat center / cover`
            }
        }
    }

    render() {
        var classes = classNames("full-section", this.props.addClass, this.props.type);
        return (
          <section className={classes} style={this.getFadeForBackgroundStyle()}>
            {this.props.children}
          </section>
        );
    }
};

FullSection.defaultProps = {
  minHeight: "auto"
};

module.exports = FullSection;
