/** @jsx React.DOM */
'use strict';

const React = require('react'),
      ReactDOM = require('react-dom'),
      $ = require('jquery'),
      MainView = require('./components/MainView.jsx');

$(function () {
  ReactDOM.render(
    <MainView />, document.getElementById('parent-wrapper')
  );
});
