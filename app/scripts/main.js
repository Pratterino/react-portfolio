/** @jsx React.DOM */
'use strict';

var React     = require('react');
var ReactDOM  = require('react-dom');
var MainView  = require('./components/MainView.jsx');

ReactDOM.render(
  <MainView />, document.getElementsByTagName('body')[0]
);
