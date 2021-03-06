'use strict';

var React = require('react');
var _ = require('lodash');
var MusicItem = require('./MusicItem.jsx');
var ProjectItem = require('./ProjectItem.jsx');

const Project = props => {
  if (props.works) {
    return (
      <section className="work-view">
        <div className='work flex-container'>
          {props.type === "music" ? renderMusicItems(props) : renderProjectItems(props)}
        </div>
      </section>
    );
  } else {
    return (
      <p>Laddar..</p>
    )
  }
};

const renderMusicItems = (props) => {
  return props.works.map(function (work, i) {
    return (
      <MusicItem work={work} type={props.type} key={i} />
    );
  });
};

const renderProjectItems = (props) => {
  return props.works.map(function (work, i) {
    const isActive = _.any(work.tags, function (tag) {
      return !props.isActiveTag(tag).inactive
    });

    if (isActive || props.activeTags.length === 0) {
      return (
        <ProjectItem
          key={i}
          work={work}
          type={props.type}
          getTypeFadeColors={props.getTypeFadeColors.bind(this)}
          isActiveTag={props.isActiveTag.bind(this)}
        />
      );
    } else {
      return null;
    }
  });
};

module.exports = Project;
