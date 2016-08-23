'use strict';

var React = require('react');
var ProjectView = require('./ProjectView.jsx');
var DescText = require('./Text.jsx');
var Column = require('./Column.jsx');
var FullSection = require('./FullSection.jsx');
var Footer = require('./Footer.jsx');
var CenteredText = require('./CenteredText.jsx');

var MainView;

module.exports = MainView = React.createClass({
  render: function () {
    var url = "url(" + this.props.image + ")";
    var imageSize = 100/2;
    var offset = this.props.offset ? this.props.offset : "100";

    return (
      <section className="hexagon-wrapper" style={{left: "calc(" + offset + "% - "+ imageSize +"px)"}}>
        <article>
          <div className="lab_item">
            <div className="hexagon hexagon2">
              <div className="hexagon-in1">
                <div className="hexagon-in2" style={{backgroundImage: url}}>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    );
  }
});
