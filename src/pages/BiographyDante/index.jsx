import React from "react";
import "./DanteBiography.css";

const BiographyDante = () => {
  return (
    <div className="dante-container">
      <div className="dante-overlay">
        <h1 className="dante-title">Dante Alighieri</h1>

        <div className="dante-content">
          <p className="dante-paragraph">
            Dante Alighieri è stato un poeta, scrittore e politico italiano, nato a Firenze nel 1265 e morto a Ravenna nel 1321. È considerato il padre della lingua italiana. La sua opera più famosa è la Divina Commedia, un poema allegorico che descrive un viaggio immaginario attraverso l'Inferno, il Purgatorio e il Paradiso.
          </p>

          <p className="dante-paragraph">
            Dante fu profondamente influenzato dalle sue esperienze personali, come l'esilio da Firenze e l'amore per Beatrice, che ispirò molte delle sue opere. Durante l'esilio scrisse anche altre opere importanti come il "Convivio", "De Monarchia" e "La Vita Nuova".
          </p>

          <p className="dante-paragraph">
            La Divina Commedia è composta da tre cantiche: Inferno, Purgatorio e Paradiso, ciascuna composta da 33 canti, con un canto introduttivo nell'Inferno, per un totale di 100 canti. L'opera è scritta in terzine incatenate ed è considerata una delle più grandi opere della letteratura mondiale.
          </p>

          <p className="dante-paragraph">
            Il suo contributo alla lingua italiana è immenso: Dante ha scelto di scrivere in volgare fiorentino invece che in latino, rendendo l’opera accessibile a più persone e ponendo le basi per l’italiano moderno. Viene spesso chiamato “il Sommo Poeta”.
          </p>

          <div className="dante-quote">
            <q>
              Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura, ché la diritta via era smarrita.
            </q>
            <div className="dante-quote-author">– Dante Alighieri, *Inferno*, Canto I</div>
          </div>

          <a
            className="dante-link"
            href="https://it.wikipedia.org/wiki/Dante_Alighieri"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scopri di più su Dante
          </a>
        </div>
      </div>
    </div>
  );
};

export {BiographyDante};
