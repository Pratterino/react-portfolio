'use strict';

var React       = require('react');
var _           = require('lodash');
var $           = require('jquery');
var classNames  = require('classnames');
var MusicItem   = require('./MusicItem.jsx');
var ProjectItem = require('./ProjectItem.jsx');

var Project;

module.exports = Project = React.createClass({
  getInitialState: function () {
    return {
      hovering: false
    }
  },

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
    var colors = self.getTypeFadeColors();
      var style = {
        background: 'linear-gradient('+ colors +'), url(./images/bg/' + work.image + ')'
      };

      return (
        <MusicItem work={work} key={i} styling={style}/>
      );
    })
  },

  getTypeFadeColors: function () {
    var colors = "";
    switch (this.props.type) {
      case "web":
        colors = "rgba(200, 200, 200, 0.5), rgba(193, 233, 231, 0.3)";
        break;
      case "music":
        colors = "rgba(240, 95, 110, 0.5), rgba(255, 100, 100, 0.3)";
        break;
      case "game":
        colors = "rgba(20, 100, 140, 0.5), rgba(30, 200, 100, 0.3)";
        break;
    }
    return colors;
  },

  getStyle: function (imageUrl) {
    var bg = {
      normal: {
        background: 'linear-gradient(' + this.getTypeFadeColors() + '), url(./images/bg/' + imageUrl + ')'
      },
      hover: {
        background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15)), url(./images/bg/' + imageUrl + ')'
      }
    };
    return this.state.hovering ? bg.hover : bg.normal;
  },

  toggleClass: function (bool) {
    this.setState({
      hovering: bool
    });
  },

  renderProjectItems: function () {
    var self = this;
    return _.map(self.props.works, _.bind(function (work, i) {
      var isActive = _.any(work.tags, function (tag) {
        return !self.props.isActiveTag(tag).inactive
      });

      if (isActive || self.props.activeTags.length === 0) {
        return <ProjectItem {...this.props} work={work} key={i} />
      } else {
        return null;
      }
    }, this));
  },

  render: function () {
    if (this.props.works) {
      return (
        <section className="work-view">
          <div className='work flex-container'>
            {this.props.type === "music" ? this.renderMusicItems() : this.renderProjectItems()}
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
