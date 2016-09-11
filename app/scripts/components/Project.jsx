'use strict';

var React = require('react');
var _ = require('lodash');
var MusicItem = require('./MusicItem.jsx');
var ProjectItem = require('./ProjectItem.jsx');

var Project;

module.exports = Project = React.createClass({

  renderMusicItems: function () {
    return this.props.works.map(_.bind(function (work, i) {
      var colors = this.getTypeFadeColors();
      var style = {
        background: 'linear-gradient(' + colors + '), url(./images/bg/' + work.image + ')'
      };

      return (
        <MusicItem work={work} key={i} styling={style}/>
      );
    }, this));
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

  renderProjectItems: function () {
    return this.props.works.map(_.bind(function (work, i) {
      var isActive = _.any(work.tags, _.bind(function (tag) {
        return !this.props.isActiveTag(tag).inactive
      }, this));

      if (isActive || this.props.activeTags.length === 0) {
        return <ProjectItem {...this.props} work={work} key={i} getTypeFadeColors={this.getTypeFadeColors} />
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
