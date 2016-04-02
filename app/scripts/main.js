/** @jsx React.DOM */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var MainView = require('./components/MainView.jsx');

$(function () {
  ReactDOM.render(
    <MainView />, document.getElementById('parent-wrapper')
  );
});
