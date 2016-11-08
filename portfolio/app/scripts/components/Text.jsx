'use strict';

var React = require('react');

class Text extends React.Component {
    constructor(props) {
        super(props);
    }

    setBackgroundImage(imageUrl) {
        this.props.updateBackgroundImage(imageUrl);
    }

    render() {
        return (
            <div className="desc-text center">
                <div className="desc-wrapper" style={{textAlign: 'left'}}>
                    <div style={{textAlign: 'center'}}>
                        <sub>Frontend-utvecklare</sub>
                    </div>

                    <div className="desc-item">
                        <h2><span>Om mig</span></h2>
                        <p><span>Frontend-utvecklare från <a onClick={this.setBackgroundImage.bind(this, "//static.panoramio.com/photos/large/94439544.jpg")}>Vännäsby</a>, tre mil utanför <a onClick={this.setBackgroundImage.bind(this, "//np3fastigheter.se/wp-content/uploads/2014/10/ume%C3%A5-1110x528.jpg")}>Umeå</a>, numera bosatt i Stockholm.</span></p>
                        <p><span>Älskar speldesign, häftiga JavaScript-ramverk och du hittar mig <u>alltid</u> med en kopp kaffe i handen.</span>
                        </p>
                    </div>

                    <div className="desc-item">
                        <h2>
                            <span>Bakgrund</span>
                        </h2>
                        <p>
                            <span>Studerade Interaktiva digitala medier på Linnéuniversitetet i Växjö (2011-2014).</span>
                        </p>
                        <p>
                            <span>Arbetar på <a href="//cygni.se">Cygni</a> som konsult sedan november 2014.</span>
                        </p>

                        <br />
                        <p>
                            <span>Har konsultat på arbetsplatser som:</span>
                        </p>
                        <div>
                            [
                            <a href="//comhem.se">Com hem</a>,
                            <a href="//telenor.se">Telenor</a>,
                            <a href="//eniro.se">Eniro</a>,
                            <a href="//weahead.se">WeAhead</a>
                            ]
                        </div>

                        <br />
                        <p><span>Trivs väldigt bra med ReactJS, Angular, Git, SCSS &amp; LESS</span></p>
                        <p><span>Agila arbetssätt, Kanban, Jira</span></p>
                    </div>

                    <div className="desc-item">
                        <h2>
                            <span>
                                Vad gör Pär nu?
                            </span>
                        </h2>
                            <span>
                            <ul>
                                <li><span>Sitter som Frontend-utvecklare hos <a href="//comhem.se">Com hem</a> och sysslar
                                    mestadels med att programmera JavaScript och CSS med React, BackboneJS, LESS, Karma/Jasmine-tester.
                                </span></li>
                                <li><span>Färdigställer min C-uppsats i medieteknik vid sidan av, som kort sagt handlar om
                                    att identifiera och förutse matvanor som resulterar i glukossvängningar hos
                                    diabetiker med hjälp av en app.</span>
                                </li>
                                <li><span>Skapar podcast-jinglar.</span></li>
                            </ul>
                            </span>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Text;
