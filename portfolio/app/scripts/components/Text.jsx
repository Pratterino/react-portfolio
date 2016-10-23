'use strict';

var React = require('react');

var Text;

module.exports = Text = React.createClass({
  render: function () {
    return (
      <div className="desc-text center">
        <div className="desc-wrapper">
          <div>
            <sub>Frontend-utvecklare</sub>
          </div>

          <div className="desc-item">
            <h2><span>Om mig</span></h2>
            <p><span>Frontend-utvecklare från Umeå, numera bosatt i Stockholm.</span></p>
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
              <span>Arbetar på <a href="//cygni.se">Cygni</a> sedan november 2014.</span>
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
                Vad gör Pär just nu?
              </span>
            </h2>
            <p><span>Sitter hos Com hem samt färdigställer min C-uppsats i medieteknik vid sidan av, som kort sagt handlar om att försöka
              identifiera och förutse matvanor som resulterar i glukossvängningar hos diabetiker med hjälp av en app.</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
});