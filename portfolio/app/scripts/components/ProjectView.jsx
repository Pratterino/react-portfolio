'use strict';

const React = require('react'),
      $ = require('jquery'),
      _ = require('lodash'),
      classNames = require('classnames'),
      Project = require('./Project.jsx'),
      FullSection = require('./FullSection.jsx'),
      Column = require('./Column.jsx'),
      NotesAnimation = require('./NotesAnim.jsx'),
      ProjectSearch = require('./ProjectSearch.jsx'),
      CenteredText = require('./CenteredText.jsx');

class ProjectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work: null,
      tags: []
    };
  }

  componentDidMount() {
    var self = this;
    $.getJSON("portfolio/api/work.json", function (data) {
      self.setState({
        work: data[self.props.type]
      });
    });
  };

  toggleItem(tag) {
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
  };

  isActiveTag(tag) {
    var self = this;
    var index = _.indexOf(self.state.tags, tag);
    return {
      inactive: index === -1,
      index: index
    };
  };

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
  }

  getTypeFadeColors(type) {
    var colors = "";
      switch (type) {
        case "web":
          colors = "rgba(200, 200, 200, 0.5), rgba(193, 233, 231, 0.3)";
          break;
        case "music":
          colors = "rgba(240, 95, 110, 0.5), rgba(255, 100, 100, 0.3)";
          break;
        case "game":
          colors = "rgba(20, 100, 140, 0.5), rgba(30, 200, 100, 0.3)";
          break;
      }
    return colors;
  }

  render() {
    const classes = {
      parent: classNames("project-wrapper", this.props.type),
      divider: classNames("project-divider", "vert-aligner")
    };

    if (this.props.type === "music") {
      return (
        <section className={classes.parent} id={this.props.type}>
          <NotesAnimation type={this.props.type}/>
          <Column width={this.props.width}>
            {this.props.children}
            <Project
              type={this.props.type}
              works={this.state.work}
              isActiveTag={this.isActiveTag.bind(this)}
              getTypeFadeColors={this.getTypeFadeColors.bind(this)}
            />
          </Column>
        </section>
      );
    } else {
      return (
        <section style={{width: "100%"}} className={classes.parent} id={this.props.type}>
          <NotesAnimation type={this.props.type}/>
          <Column width={this.props.width}>
            {this.props.children}
            <ProjectSearch
              toggleItem={this.toggleItem.bind(this)}
              works={this.state.work}
              isActiveTag={this.isActiveTag.bind(this)}
              activeTags={this.state.tags}
            />
            <Project
              type={this.props.type}
              toggleItem={this.toggleItem.bind(this)}
              works={this.state.work}
              isActiveTag={this.isActiveTag.bind(this)}
              getTypeFadeColors={this.getTypeFadeColors.bind(this)}
              activeTags={this.state.tags}
            />
          </Column>
        </section>
      );
    }
  }
}

module.exports = ProjectView;
