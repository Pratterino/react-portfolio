'use strict';

var React         = require('react');
var $             = require('jquery');
var _             = require('lodash');
var Project       = require('./Project.jsx');
var FullSection   = require('./FullSection.jsx');
var ProjectSearch = require('./ProjectSearch.jsx');
var classNames    = require('classnames');

var ProjectView;

module.exports = ProjectView = React.createClass({
  getInitialState: function () {
    return {
      work: null,
      tags: []
    };
  },

  componentDidMount: function () {
    var self = this;
    $.getJSON("api/work.json", function (data) {
      console.info(data);

      self.setState({
        work: data[self.props.type]
      });
    });
  },

  toggleItem: function (tag) {
    var item = this.isActiveTag(tag);
    var tempTags = this.state.tags;

    if (item.inactive) {
      tempTags.push(tag);
    } else {
      tempTags.splice(item.index, 1);
    }
    this.setState({
      tags: tempTags
    });
    console.info(tag, this.state.tags);
  },

  isActiveTag: function (tag) {
    var self = this;
    var index = _.indexOf(self.state.tags, tag);
    return {
      inactive: index === -1,
      index: index
    };
  },

  render: function () {
    var classes = {
      parent: "project-wrapper " + this.props.type,
      divider: "project-divider vert-aligner " + this.props.type
    };

    return (
      <section className={classes.parent}>
          <div className={classes.divider}>
            <i className="fa fa-arrow-down">&nbsp;&nbsp;</i>
            <h2>
              <span>{this.props.type === "game" ? "Spelutveckling" : "Webbutveckling"}</span>
            </h2>
            &nbsp;&nbsp;
            <i className="fa fa-arrow-down"></i>
          </div>
        <ProjectSearch
          toggleItem={this.toggleItem}
          works={this.state.work}
          isActiveTag={this.isActiveTag}
          activeTags={this.state.tags}
        />
        <Project
          toggleItem={this.toggleItem}
          works={this.state.work}
          isActiveTag={this.isActiveTag}
          activeTags={this.state.tags}
        />
      </section>
    );
  }
});
