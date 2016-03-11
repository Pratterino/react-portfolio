// main.js
/** @jsx React.DOM */

'use strict';

var data = [
    {author: "Pär", text: "Strandberg"}
];

var React = require('react');
var ReactDOM = require('react-dom');
var MainView = require('./components/MainView.jsx');

ReactDOM.render(
  <MainView data={data} />, document.getElementById('content')
);
