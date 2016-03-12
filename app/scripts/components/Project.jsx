'use strict';

var React = require('react');
var _ = require('lodash');

var Project;

module.exports = Project = React.createClass({

  getWorkData: function (work) {
    var bg =  {
      backgroundImage: 'url(./images/bg/' + work.image + ')'
    };

    return (
      <div className='work flex-container'>
        <a href={work.link} className='work-item-container'>
          <div className='bg-color'></div>

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
              <div className='item-tags-container'>
                <div className='item-read-more'>
                  <p>Läs mer <i className='fa fa-arrow-right'> </i></p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  },

  render: function () {
    if (this.props.works) {
      var items = this.props.works.map(this.getWorkData);

      return (
        <div className='Project'>
          {items}
        </div>
      );
    } else {
      return (
        <p>Laddar..</p>
      )
    }
  }
});
