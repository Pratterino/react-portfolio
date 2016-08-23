'use strict';

var React = require('react');
var Navbar;

module.exports = Navbar = React.createClass({
  CONSTS: {
    web_nav: "web",
    game_nav: "game",
    music_nav: "music",
    about_nav: "about",
    contact_nav: "contact"
  },

  getInitialState: function () {
    return ({
      active: ""
    });
  },

  scrollToView: function (e) {
    var id = this.stripText(e.target.id);
    var target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({block: "start"});
    }
    this.setState({
      active: id
    })
  },

  stripText: function (string) {
    return string.replace("_nav", "");
  },

  render: function () {
    return (
      <header className={this.state.active + "_color"}>
        <div className="nav-header">
          <div className="nav-link-group">
            <h1>Pär Strandberg</h1>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-link-group">
            <h5>Projekt</h5>
            <ul>
              <li><a onClick={this.scrollToView} id="web_nav"
                     className={this.state.active === this.CONSTS.web_nav ? "active" : ""}>Webb</a></li>
              <li><a onClick={this.scrollToView} id="game_nav"
                     className={this.state.active === this.CONSTS.game_nav ? "active" : ""}>Spel</a></li>
              <li><a onClick={this.scrollToView} id="music_nav"
                     className={this.state.active === this.CONSTS.music_nav ? "active" : ""}>Musik</a></li>
            </ul>
          </div>

          <div className="nav-link-group">
            <h5>Information</h5>
            <ul>
              <li><a onClick={this.scrollToView} id="about_nav"
                     className={this.state.active === this.CONSTS.about_nav ? "active" : ""}>Om mig</a></li>
              <li><a onClick={this.scrollToView} id="contact_nav"
                     className={this.state.active === this.CONSTS.contact_nav ? "active" : ""}>Kontakt</a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
});
