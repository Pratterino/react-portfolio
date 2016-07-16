/** @jsx React.DOM */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var MainView = require('./components/MainView.jsx');
var Navbar = require('./components/Navbar.jsx');

$(function () {
  ReactDOM.render(
    <Navbar />, document.getElementById('navbar')
  );
  ReactDOM.render(
    <MainView />, document.getElementById('parent-wrapper')
  );
});
