'use strict';

var React       = require('react');
var _           = require('lodash');
var $           = require('jquery');
var classNames  = require('classnames');

var MusicItem;

module.exports = MusicItem = React.createClass({
  getInitialState: function () {
    return {
      embedActive: false,
      hovering: false
    }
  },

  toggleEmbed: function () {
    this.setState({
      embedActive: !this.state.embedActive
    });
  },

  toggleClass: function (bool) {
    this.setState({
      hovering: bool
    });
  },

  getStyle: function (isHovering) {
    var bg = {
      normal: {
        backgroundImage: 'linear-gradient(rgba(170, 230, 107, 0.1), rgba(126, 175, 75, 0.2)), url(./images/bg/' + this.props.work.image + ')'
      },
      hover: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(126, 175, 75, .35)), url(./images/bg/' + this.props.work.image + ')'
      }
    };
    return !isHovering ? bg.normal : bg.hover;
  },

  render: function () {
    if (this.state.embedActive) {
      return (
        <div className='work-item-container container-music'>
          <div className="item-actionbar" onClick={this.toggleEmbed}>
            <button className="cursor"><i className="fa fa-arrow-left"/> Tillbaka</button>
          </div>
          <div className="item-embed" dangerouslySetInnerHTML={{__html: this.props.work.embed}}></div>
        </div>
      );
    } else {
      return (
        <div onClick={this.toggleEmbed} className='work-item-container container-music cursor' onMouseEnter={this.toggleClass.bind(this, true)} onMouseLeave={this.toggleClass.bind(this, false)}>
          <div className='item-image' style={this.getStyle(this.state.hovering)}></div>
          <div className='item-header'>
            <h2>
              <span>{this.props.work.title}</span>
            </h2>
          </div>

          <div className='item-content' style={{height: "100% !important"}}>
            <div className='item'>
              <div className='item-desc'>
                <p>{this.props.work.description}</p>
              </div>
              <div className='item-tags-container'>
                <ul className="item-tags"></ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
});
