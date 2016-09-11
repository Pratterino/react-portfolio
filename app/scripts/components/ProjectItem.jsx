'use strict';

var React = require('react');
var _ = require('lodash');
var $ = require('jquery');
var classNames = require('classnames');

var ProjectItem;

module.exports = ProjectItem = React.createClass({
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
        background: 'linear-gradient(' + colors + '), url(./images/bg/' + work.image + ')'
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

  render: function () {
    return (
      <a href={this.props.work.link} stopPropagation={true} className='work-item-container'
         onMouseEnter={this.toggleClass.bind(this, true)} onMouseLeave={this.toggleClass.bind(this, false)}>
        <div className='item-image' style={this.getStyle(this.props.work.image)}></div>
        <div className='item-header'>
          <h2>
            <span>{this.props.work.title}</span>
          </h2>
        </div>

        <div className='item-content'>
          <div className='item'>
            <div className='item-desc'>
              <p>{this.props.work.description}</p>
            </div>
            <div className='item-tags-container'>
              <ul className="item-tags">
                {this.getTags(this.props.work)}
              </ul>
            </div>
          </div>
        </div>
      </a>
    );
  }
});
