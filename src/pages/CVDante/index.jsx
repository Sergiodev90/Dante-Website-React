import './dante.css'

function CVDante() {
  return (
    <div className="background-generale">
      <div className="container-main">

        {/* Título principal */}
        <div className="container">
          <p>Curriculum Vitae alla Morte</p>
        </div>

        {/* Biografía */}
        <div className="container_2">
          <h2 className="titolo-sezione">Biografia</h2>
          <ul>
            <li><b>Nome:</b> Dante Alighieri</li>
            <li><b>Data di nascita:</b> 1265</li>
            <li><b>Luogo di nascita:</b> Firenze, Italia</li>
            <li><b>Data di morte:</b> 1321</li>
            <li><b>Luogo di morte:</b> Ravenna, Italia</li>
          </ul>
        </div>

        {/* Objetivo profesional */}
        <div className="obiettivo_professionale">
          <h3 className="titolo-sezione">Obiettivo Professionale</h3>
          <p>
            Poeta, filosofo e scrittore, con esperienza in letteratura medievale, filosofia e politica.
            Autore della Divina Commedia, opera fondamentale della letteratura mondiale.
            Interesse nella riflessione filosofica e religiosa e nella promozione della lingua volgare 
            come strumento di espressione culturale e poetica.
          </p>
        </div>

        {/* Experiencia profesional */}
        <div className="Esperienza_professionale">
          <h3 className="titolo-sezione">Esperienza Professionale</h3>

          <ul>
            <li><b className="sottotitolo">Poeta e Scrittore</b></li>
            <li>Composizione dell'opera monumentale che narra il viaggio allegorico dell'anima attraverso Inferno, Purgatorio e Paradiso.</li>
            <li>Utilizzo del volgare fiorentino per rendere la poesia accessibile a un pubblico più ampio.</li>
            <li>Trattamento di temi politici, teologici e morali con un linguaggio allegorico e simbolico.</li>
          </ul>

          <ul>
            <li><b className="sottotitolo">Politico e Funzionario Pubblico</b></li>
            <li>Membro attivo della politica fiorentina, parte della fazione dei Guelfi Bianchi.</li>
            <li>Esilio da Firenze a causa delle dispute politiche interne alla città.</li>
          </ul>

          <ul>
            <li><b className="sottotitolo">Filosofo e Teologo</b></li>
            <li>Autore di trattati filosofici e teologici come <i>De Vulgari Eloquentia</i> e <i>Monarchia</i>.</li>
            <li>Difesa dell'idea di un impero universale sotto l'autorità dell'imperatore.</li>
          </ul>

          <ul>
            <li><b className="sottotitolo">Istruzione e Formazione</b></li>
            <li>Studio della filosofia, della grammatica latina, della poesia e della retorica.</li>
            <li>Approfondimento delle opere di Aristotele, Virgilio e altri classici.</li>
          </ul>

          <ul>
            <li><b className="sottotitolo">Competenze</b></li>
            <li>Scrittura e Composizione: Poesia epica, lirica e filosofica.</li>
            <li>Lingua: Eccellente padronanza del volgare fiorentino e del latino.</li>
            <li>Politica: Esperienza diretta nella politica comunale di Firenze.</li>
            <li>Filosofia: Approfondimento di tematiche morali, politiche e religiose.</li>
            <li>Teologia: Approccio teologico e allegorico, con attenzione alla giustizia divina.</li>
          </ul>

          <ul>
            <li><b className="sottotitolo">Opere Principali</b></li>
            <li><i>Divina Commedia</i> (1307-1321): Poema epico che descrive il viaggio nell'aldilà.</li>
            <li><i>Vita Nuova</i> (1292): Raccolta di poesie e prose sull’amore per Beatrice Portinari.</li>
            <li><i>De Vulgari Eloquentia</i> (1304-1306): Trattato sulla lingua volgare.</li>
            <li><i>Il Convivio</i> (1304-1307): Opera filosofica in prosa su temi morali e filosofici.</li>
            <li><i>Monarchia</i> (1312-1313): Trattato politico sull'idea di un impero universale.</li>
          </ul>

          <ul>
            <li><b className="sottotitolo">Lingue</b></li>
            <li>Volgare fiorentino: madrelingua, utilizzato per la poesia e la prosa.</li>
            <li>Latino: lingua di riferimento per la filosofia e la teologia.</li>
          </ul>

          <ul>
            <li><b className="sottotitolo">Riconoscimenti</b></li>
            <li>Considerato il "padre" della lingua italiana.</li>
            <li>Punto di riferimento nella letteratura mondiale.</li>
          </ul>
        </div>

        {/* Sección de imagen vacía */}
        <div className="ciao"></div>

        {/* Imagen de Dante */}
        <div className="profilo">
          <img
            src="https://www.anticoantico.com/upload/big_67d6-IMG_4997.jpeg"
            alt="Dante Alighieri"
          />
        </div>

      </div>
    </div>
  );
}

export {CVDante}