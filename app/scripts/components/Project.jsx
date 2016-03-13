'use strict';

var React = require('react');
var _ = require('lodash');

var Project;

module.exports = Project = React.createClass({

  getWorkData: function (work) {
    var bg = {
      backgroundImage: 'url(./images/bg/' + work.image + ')'
    };

    return (
      <a href={work.link} className='work-item-container'>
        <div className='item-image' style={bg}></div>
        <div className='item-header'>
          <h2>
            <span>{work.title}</span>
          </h2>
        </div>

        <div className='item-content'>
          <div className='item'>
            <div className='item-desc'>
              <p>{work.description}</p>
            </div>
            <div className='item-tags-container'></div>
          </div>
        </div>
      </a>
    )
  },

  render: function () {
    if (this.props.works) {
      var items = this.props.works.map(this.getWorkData);

      return (
        <div className="work-view">
          <div className='work flex-container'>
            {items}
          </div>
        </div>
      );
    } else {
      return (
        <p>Laddar..</p>
      )
    }
  }
});
