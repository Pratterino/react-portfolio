'use strict';

var React       = require('react');
var _           = require('lodash');
var $           = require('jquery');
var classNames  = require('classnames');

var MusicItem;

module.exports = MusicItem = React.createClass({
  getInitialState: function () {
    return {
      embedActive: false
    }
  },

  toggleEmbed: function () {
    this.setState({
      embedActive: !this.state.embedActive
    });
  },

  render: function () {
    var bg = {
      backgroundImage: 'url(./images/bg/' + this.props.work.image + ')'
    };

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
        <div onClick={this.toggleEmbed} className='work-item-container container-music cursor'>
          <div className='item-image' style={bg}></div>
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
                <ul className="item-tags"></ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
});
