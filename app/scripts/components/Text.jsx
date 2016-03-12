'use strict';

var React = require('react');

var Text;

module.exports = Text = React.createClass({
  render: function () {
    return (
      <div className="desc-text center">
        <div>
          <h1>Pär Strandberg</h1>
          <sub>Frontend-utvecklare</sub>
        </div>

        <div className="desc-item">
          <h2>Om mig</h2>
          <p>Frontend-utvecklare från Umeå, numera bosatt i Stockholm.</p>
          <p>Älskar speldesign, häftiga JavaScript-ramverk och har alltid en kopp kaffe i handen.</p>
        </div>

        <div className="desc-item">
          <h2>Bakgrund</h2>
          <p>Studerade Interaktiva digitala medier på Linnéuniversitetet i Växjö (2011-2014).</p>
          <p>Arbetar på <a href="//cygni.se">Cygni</a> sedan november 2014</p>
          <br />
          <p>Har konsultat på arbetsplatser som:</p>
          <div>
            [<a href="//weahead.se">WeAhead</a>,
            <a href="//comhem.se">Com hem</a>,
            <a href="//eniro.se">Eniro</a>,
            <a href="//telenor.se">Telenor</a>]
          </div>
        </div>

        <div className="desc-item">
          <h2>Vad gör Pär nu?</h2>
          <p>Färdigställer just nu min C-uppsats, som kort sagt handlar om att motverka</p>
          <p>glukossvängningar hos typ-2 diabetiker med hjälp av en app.</p>
        </div>
      </div>
    );
  }
});
