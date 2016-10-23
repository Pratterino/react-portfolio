'use strict';

var React = require('react');
var _ = require('lodash');
var $ = require('jquery');
var classNames = require('classnames');

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false
    };

    this.getStyle = this.getStyle.bind(this);
    this.getTags = this.getTags.bind(this);
  }

  getTags() {
    return this.props.work.tags.map(_.bind(function(tag, i) {
      var classes = classNames({
        active: !this.props.isActiveTag(tag).inactive
      });

      return (
        <li key={i}
            className={classes}
            onClick={(e) => this.onClick}
            title="Klicka för att filtrera med denna kunskap">#{tag}</li>
      );
    }, this));
  }

  onClick(e) {
    e.preventDefault();

    var tag = $(e.target).text();
    this.props.toggleItem(tag);
  }

  renderMusicItems() {
    var colors = this.props.getTypeFadeColors(this.props.type);

    return this.props.works.map(_.bind(function (work, i) {
      var style = {
        background: 'linear-gradient(' + colors + '), url(./portfolio/app/images/bg/' + work.image + ')'
      };

      return (
        <MusicItem work={work} key={i} styling={style}/>
      );
    }, this));
  }

  getStyle() {
    const bg = {
      normal: {
        background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(./portfolio/app/images/bg/' + this.props.work.image + ')'
      },
      hover: {
        background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url(./portfolio/app/images/bg/' + this.props.work.image + ')'
      }
    };
    return this.state.hovering ? bg.hover : bg.normal;
  }

  toggleClass(bool) {
    this.setState({
      hovering: bool
    });
  }

  render() {
    return (
      <a href={this.props.work.link} stopPropagation={true} className='work-item-container'
         onMouseEnter={this.toggleClass.bind(this, true)} onMouseLeave={this.toggleClass.bind(this, false)}>
        <div className='item-image' style={this.getStyle()}></div>
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
              <ul className="item-tags">
                {this.getTags()}
              </ul>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

module.exports = ProjectItem;
