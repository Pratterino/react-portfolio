'use strict';

var React = require('react');
var $ = require('jquery');
var _ = require('lodash');
var Project = require('./Project.jsx');
var FullSection = require('./FullSection.jsx');
var Column = require('./Column.jsx');
var NotesAnimation = require('./NotesAnim.jsx');
var ProjectSearch = require('./ProjectSearch.jsx');
var CenteredText = require('./CenteredText.jsx');

var ProjectView;

module.exports = ProjectView = React.createClass({
  getInitialState: function () {
    return {
      work: null,
      tags: []
    };
  },

  componentDidMount: function () {
    var self = this;
    $.getJSON("api/work.json", function (data) {
      console.info(data);

      self.setState({
        work: data[self.props.type]
      });
    });
  },

  toggleItem: function (tag) {
    var item = this.isActiveTag(tag);
    var tempTags = this.state.tags;

    if (item.inactive) {
      tempTags.push(tag);
    } else {
      tempTags.splice(item.index, 1);
    }
    this.setState({
      tags: tempTags
    });
  },

  isActiveTag: function (tag) {
    var self = this;
    var index = _.indexOf(self.state.tags, tag);
    return {
      inactive: index === -1,
      index: index
    };
  },

  getDescriptionText() {
    if (this.props.type === "game") {
      return (
        <div>
          <p><span>Spelintresset sträcker sig tillbaka till barndomsbenen.</span></p>
          <p><span>Det handlar mindre om själva spelandet, utan mer om att komma på intressanta spelmekaniker, regelverk,
            pussel, och intressanta spelmoment för andra att ta sig igenom.</span></p>
        </div>
      );
    }
    if (this.props.type === "web") {
      return (
        <div>
          <p><span>Har varit väldigt intresserad av interaktiva medier sedan gymnasiet.</span></p>
          <p><span>Programmering var en riktning som jag hamnade mer och mer i under universitetsperioden och verkligen
            började tycka om.</span></p>
          <p><span>Att hitta lösningar och kunna interagera med kod visuellt i klienten känns rätt magiskt.</span></p>
        </div>
      );
    } else {
      return (
        <div>
          <p><span>Fastnade för folkmusik och började spela piano, dragspel och sedan gitarr under gymnasiet har ett generellt intresse av att skapa saker. Musik är fantastiskt och något jag konsumerar i stora mängder. Har fortfarande drömmar om att spela i litet band, uppträda och allt vad det innebär.</span>
          </p>
          <p><span>Har långlivade planer på att spela in ett eget album åtminstonde, men det har inte riktigt blivit en verklighet ännu.</span>
          </p>
          <p><span><i>Jag drömmer vidare..</i></span></p>
        </div>
      );
    }
  },

  render: function () {
    var classes = {
      parent: "project-wrapper " + this.props.type,
      divider: "project-divider vert-aligner"
    };

    if (this.props.type === "music") {
      return (
        <section className={classes.parent} id={this.props.type}>
          <Column width={this.props.width[0]}>
            {this.props.children}
          </Column>
          <Column width={this.props.width[1]}>
            <Project
              type={this.props.type}
              works={this.state.work}
            />
          </Column>
          <NotesAnimation type={this.props.type} />
        </section>
      );
    } else {
      return (
        <section className={classes.parent} id={this.props.type}>
          <Column width={this.props.width[0]}>
            {this.props.children}
            <ProjectSearch
              toggleItem={this.toggleItem}
              works={this.state.work}
              isActiveTag={this.isActiveTag}
              activeTags={this.state.tags}
            />
          </Column>
          <Column width={this.props.width[1]}>
            <Project
              type={this.props.type}
              toggleItem={this.toggleItem}
              works={this.state.work}
              isActiveTag={this.isActiveTag}
              activeTags={this.state.tags}
            />
          </Column>
          <NotesAnimation type={this.props.type} />
        </section>
      );
    }
  }
});
