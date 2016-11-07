'use strict';

const React = require('react'),
  ProjectView = require('./ProjectView.jsx'),
  DescText = require('./Text.jsx'),
  Column = require('./Column.jsx'),
  FullSection = require('./FullSection.jsx'),
  Footer = require('./Footer.jsx'),
  CenteredText = require('./CenteredText.jsx'),
  NotesAnimation = require('./NotesAnim.jsx');

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: "portfolio/app/images/outdoors.jpg",
            language: "sv"
        };
    }

    updateBackgroundImage(imageUrl) {
        this.setState({
            backgroundImage: imageUrl
        });
    }


    render() {
    const types = {
      about: "about",
      game: "game",
      music: "music",
      web: "web"
    };

    return (
      <div className="page-wrapper">
        <div className="content">
          <FullSection type={types.about} backgroundImage={this.state.backgroundImage}>
            <Column width={100}>
              <CenteredText type={types.about}>
                <div>
                  <h3>Pär Strandberg</h3>
                  <DescText updateBackgroundImage={this.updateBackgroundImage.bind(this)} />
                </div>
              </CenteredText>
              <NotesAnimation type={types.about}/>
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
    )
  };
}

module.exports = MainView;
