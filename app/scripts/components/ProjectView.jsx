'use strict';

var React = require('react');
var $ = require('jquery');
var Project = require('./Project.jsx');

var ProjectView;

module.exports = ProjectView = React.createClass({
  getInitialState: function () {
    return {
      work: null
    };
  },

  componentDidMount: function () {
    var self = this;
    $.getJSON("api/work.json", function (data) {
      console.info(data);
      self.setState({
        work: data
      });
    });
  },

  render: function () {
    return (
      <Project works={this.state.work} />
    );
  }
});
