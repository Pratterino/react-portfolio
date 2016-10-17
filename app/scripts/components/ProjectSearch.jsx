'use strict';

const React       = require('react'),
      _           = require('lodash'),
      classNames  = require('classnames');

const ProjectSearch = (props) => {
  var getWorkData = () => {
    var works = _.map(props.works, function (work) {
      return work.tags;
    });
    var uniqTags = _.unique(_.flatten(works));

    return _.map(uniqTags, function (tag, i) {
      var classes = classNames({
        active: !props.isActiveTag(tag).inactive
      });

      return (
        <li key={i}
            onClick={props.toggleItem.bind(null, tag)}
            title="Klicka för att filtrera med denna kunskap"
            className={classes}>#{tag}</li>
      )
    });
  };

  if (props.works) {
    return (
      <div className="search-view">
        <div className='item-tags-container'>
          <ul className="item-tags">
            {getWorkData()}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <p>Laddar..</p>
    )
  }
};

module.exports = ProjectSearch;
