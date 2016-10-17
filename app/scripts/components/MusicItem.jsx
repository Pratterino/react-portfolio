'use strict';

const React = require('react');

class MusicItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      embedActive: false,
      hovering: false
    };
  }

  toggleEmbed() {
    this.setState({
      embedActive: !this.state.embedActive
    });
  };

  toggleClass(bool) {
    this.setState({
      hovering: bool
    });
  };

  getStyle() {
    var bg = {
      normal: {
        backgroundImage: 'linear-gradient(rgba(240, 95, 110, 0.5), rgba(255, 100, 100, 0.3)), url(./images/bg/' + this.props.work.image + ')'
      },
      hover: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(255, 100, 70, 0)), url(./images/bg/' + this.props.work.image + ')'
      }
    };
    return !this.state.hovering ? bg.normal : bg.hover;
  };

  render() {
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
        <div onClick={this.toggleEmbed} className='work-item-container container-music cursor'
             onMouseEnter={this.toggleClass.bind(this, true)} onMouseLeave={this.toggleClass.bind(this, false)}>
          <div className='item-image' style={this.getStyle()}></div>
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
}

module.exports = MusicItem;
