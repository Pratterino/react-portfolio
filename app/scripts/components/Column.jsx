const React = require('react'),
      classNames = require('classnames');

const Column = (props) => {
    var classString = classNames("column", "type-" + props.type);
    var styles = {
      width: props.width + "%"
    };

    return (
      <div className={classString} style={styles} id={props.type}>
        {props.children}
      </div>
    );
};

Column.defaultProps = {
  width: 'auto'
};

Column.propTypes = {
  width: React.PropTypes.number.isRequired,
  type: React.PropTypes.string
};

module.exports = Column;
