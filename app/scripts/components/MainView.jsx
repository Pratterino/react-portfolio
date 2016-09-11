'use strict';

var React = require('react');
var ProjectView = require('./ProjectView.jsx');
var DescText = require('./Text.jsx');
var Column = require('./Column.jsx');
var FullSection = require('./FullSection.jsx');
var Footer = require('./Footer.jsx');
var CenteredText = require('./CenteredText.jsx');
var Hexagon = require('./Hexagon.jsx');

var MainView;

module.exports = MainView = React.createClass({
  render: function () {
    var types = {
      about: "about",
      game: "game",
      music: "music",
      web: "web"
    };

    return (
      <div className="page-wrapper">
        <div className="content">
          <FullSection type={types.about}>
            <Column width={30}>
              <CenteredText type={types.about}>
                <div>
                  <h3>Om mig</h3>
                </div>
                <div>
                  <Hexagon image="images/paer.png"/>
                </div>
              </CenteredText>
            </Column>
            <Column width={70} type={types.about}>
              <DescText />
            </Column>
          </FullSection>

          <FullSection type={types.web}>
            <ProjectView type={types.web} width={[30, 70]}>
              <CenteredText type={types.web}>
                <div>
                  <h3>Webb</h3>
                </div>
                <div>
                  <p>Har varit väldigt intresserad av interaktiva medier sedan gymnasiet.</p>
                  <p>Programmering var en riktning som jag hamnade mer och mer i under universitetsperioden och
                    verkligen
                    började tycka om.</p>
                  <p>Att hitta lösningar och kunna interagera med kod visuellt i klienten känns rätt magiskt.</p>
                </div>
              </CenteredText>
            </ProjectView>
          </FullSection>

          <FullSection type={types.game}>
            <ProjectView type={types.game} width={[30, 70]}>
              <CenteredText type={types.game}>
                <div>
                  <h3>Spel</h3>
                </div>
                <div>
                  <p>Spelintresset sträcker sig tillbaka till barndomsbenen.</p>
                  <p>Det handlar mindre om själva spelandet, utan mer om att komma på intressanta spelmekaniker,
                    regelverk, pussel, och intressanta spelmoment för andra att ta sig igenom.</p>
                </div>
              </CenteredText>
            </ProjectView>
          </FullSection>

          <FullSection type={types.music}>
            <ProjectView type={types.music} width={[30, 70]}>
              <CenteredText type={types.music}>
                <div>
                  <h3>Musik</h3>
                </div>
                <div>
                  <p>Fastnade för folkmusik och började spela piano, dragspel och sedan gitarr under gymnasiet har ett
                    generellt intresse av att skapa saker. Musik är fantastiskt och något jag konsumerar i stora
                    mängder. Har fortfarande drömmar om att spela i litet band, uppträda och allt vad det innebär.</p>
                  <p>Har långlivade planer på att spela in ett eget album åtminstonde, men det har inte riktigt blivit
                    en verklighet ännu.</p>
                  <p><i>Jag drömmer vidare..</i></p>
                </div>
              </CenteredText>
            </ProjectView>
          </FullSection>
        </div>
        <Footer />
      </div>
    );
  }
});
