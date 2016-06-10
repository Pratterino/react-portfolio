'use strict';

var React       = require('react');
var _           = require('lodash');
var $           = require('jquery');
var classNames  = require('classnames');
var MusicItem   = require('./MusicItem.jsx');

var Project;

module.exports = Project = React.createClass({

  getTags: function (work) {
    var self = this;
    return _.map(work.tags, function (tag, i) {
      var classes = classNames({
        active: !self.props.isActiveTag(tag).inactive
      });

      return (
        <li key={i}
            className={classes}
            onClick={self.onClick}
            title="Klicka för att filtrera med denna kunskap">#{tag}</li>
      );
    });
  },

  onClick: function (e) {
    e.preventDefault();

    var tag = $(e.target).text();
    this.props.toggleItem(tag);
  },

  renderMusicItems: function () {
    var self = this;
    return _.map(self.props.works, function (work, i) {
      return (
        <MusicItem work={work} key={i} />
      );
    })
  },

  getWorkData: function () {
    var self = this,
        colors;
    switch (this.props.type) {
      case "web":
        colors = "rgba(250, 50, 150, .5), rgba(200, 125, 120, .9)";
        break;
      case "music":
        colors = "rgba(100, 100, 100, .5), rgba(255, 100, 200, 1)";
        break;
      case "game":
        colors = "rgba(245, 250, 0, .5), rgba(230, 215, 0, .9)";
        break;
    }

    return _.map(self.props.works, function (work, i) {
      var bg = {
        background: 'linear-gradient('+ colors +'), url(./images/bg/' + work.image + ')'
      };

      var isActive = _.any(work.tags, function (tag) {
          return !self.props.isActiveTag(tag).inactive
      });

      if (isActive || self.props.activeTags.length === 0) {
        return (
          <a key={i} href={work.link} stopPropagation={true} className='work-item-container'>
            <div className='item-image' style={bg}></div>
            <div className='item-header'>
              <h2>
                <span>{work.title}</span>
              </h2>
            </div>

            <div className='item-content'>
              <div className='item'>
                <div className='item-desc'>
                  <p>{work.description}</p>
                </div>
                <div className='item-tags-container'>
                  <ul className="item-tags">
                    {self.getTags(work)}
                  </ul>
                </div>
              </div>
            </div>
          </a>
        );
      }
    });
  },

  render: function () {
    if (this.props.works) {
      return (
        <section className="work-view">
          <div className='work flex-container'>
            {this.props.type === "music" ? this.renderMusicItems() : this.getWorkData()}
          </div>
        </section>
      );
    } else {
      return (
        <p>Laddar..</p>
      )
    }
  }
});
