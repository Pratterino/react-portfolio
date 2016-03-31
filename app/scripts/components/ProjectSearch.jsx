'use strict';

var React = require('react');
var $ = require('jquery');
var _ = require('lodash');
var classNames = require('classnames');

var ProjectSearch;

module.exports = ProjectSearch = React.createClass({

  getWorkData: function () {
    var self = this;
    var works = _.map(self.props.works, function (work) {
      return work.tags;
    });
    var uniqTags = _.unique(_.flatten(works));

    return _.map(uniqTags, function (tag, i) {
      var classes = classNames({
        active: !self.props.isActiveTag(tag).inactive
      });

      return (
        <li key={i}
            onClick={self.props.toggleItem.bind(null, tag)}
            title="Klicka för att filtrera med denna kunskap"
            className={classes}>#{tag}</li>
      )
    });
  },

  render: function () {
    if (this.props.works) {
      return (
        <div className="search-view">
          <div className='item-tags-container'>
            <ul className="item-tags">
              {this.getWorkData()}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <p>Laddar..</p>
      )
    }
  }
});
