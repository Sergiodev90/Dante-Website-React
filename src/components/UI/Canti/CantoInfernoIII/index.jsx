import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';


const images = [
    '/src/assets/images/portainferno.jpg',
    '/src/assets/images/labandierainferno.jpeg',
    '/src/assets/images/caronteinferno.png'
  ];
function CantoInferoIII(){
        const [currentImage, setCurrentImage] = useState(0);
        const  [openCanto,setOpenCanto] = useState(false);
        const [fade, setFade] = useState(true);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setFade(false); // inicia el fade-out
            setTimeout(() => {
              setCurrentImage((prev) => (prev + 1) % images.length);
              setFade(true); // fade-in al cambiar
            }, 500); // espera que termine el fade-out antes de cambiar
          }, 5000); // cada 5 segundos
      
          return () => clearInterval(interval);
        }, []);
    return(
        <div className="canto-explanation">
        {openCanto ? (
  <div class="full-canto-text">
  <h2>Inferno – Canto III</h2>
  <div class="text-canto">
    <p>Per me si va ne la città dolente,<br />
    per me si va ne l'etterno dolore,<br />
    per me si va tra la perduta gente.</p>

    <p>Giustizia mosse il mio alto fattore;<br />
    fecemi la divina podestate,<br />
    la somma sapïenza e 'l primo amore.</p>

    <p>Dinanzi a me non fuor cose create<br />
    se non etterne, e io etterno duro.<br />
    Lasciate ogne speranza, voi ch'intrate.</p>

    <p>Queste parole di colore oscuro<br />
    vid'io scritte al sommo d'una porta;<br />
    per ch'io: «Maestro, il senso lor m'è duro».</p>

    <p>Ed elli a me, come persona accorta:<br />
    «Qui si convien lasciare ogne sospetto;<br />
    ogne viltà convien che qui sia morta.</p>

    <p>Noi siam venuti al loco ov'io t'ho detto<br />
    che tu vedrai le genti dolorose<br />
    c'hanno perduto il ben de l'intelletto».</p>

    <p>E poi che la sua mano a la mia puose<br />
    con lieto volto, ond'io mi confortai,<br />
    mi mise dentro a le segrete cose.</p>

    <p>Quivi sospiri, pianti e alti guai<br />
    risonavan per l'aere sanza stelle,<br />
    per ch'io al cominciar ne lagrimai.</p>

    <p>Diverse lingue, orribili favelle,<br />
    parole di dolore, accenti d'ira,<br />
    voci alte e fioche, e suon di man con elle</p>

    <p>facevano un tumulto, il qual s'aggira<br />
    sempre in quell'aura sanza tempo tinta,<br />
    come la rena quando turbo spira.</p>

    <p>E io ch'avea d'error la testa cinta,<br />
    dissi: «Maestro, che è quel ch'i' odo?<br />
    e che gent'è che par nel duol sì vinta?». </p>

    <p>Ed elli a me: «Questo misero modo<br />
    tegnon l'anime triste di coloro<br />
    che visser sanza 'nfamia e sanza lodo.</p>

    <p>Mischiate sono a quel cattivo coro<br />
    de li angeli che non furon ribelli<br />
    né fur fedeli a Dio, ma per sé fuoro.</p>

    <p>Caccianli i ciel per non esser men belli,<br />
    né lo profondo inferno li riceve,<br />
    ch'alcuna gloria i rei avrebber d'elli».</p>

    <p>E io: «Maestro, che è tanto greve<br />
    a lor che lamentar li fa sì forte?».<br />
    Rispuose: «Dicerolti molto br /eve.</p>

    <p>Questi non hanno speranza di morte<br />
    e la lor cieca vita è tanto bassa,<br />
    che 'nvidïosi son d'ogne altra sorte.</p>

    <p>Fama di loro il mondo esser non lassa;<br />
    misericordia e giustizia li sdegna:<br />
    non ragioniam di lor, ma guarda e passa».</p>

    <p>E io, che riguardai, vidi una 'nsegna<br />
    che girando correva tanto ratta,<br />
    che d'ogne posa mi parea indegna;</p>

    <p>e dietro le venìa sì lunga tratta<br />
    di gente, ch'i' non averei creduto<br />
    che morte tanta n'avesse disfatta.</p>

    <p>Poscia ch'io v'ebbi alcun riconosciuto,<br />
    vidi e conobbi l'ombr /a di colui<br />
    che fece per viltade il gran rifiuto.</p>

    <p>Incontanente intesi e certo fui<br />
    che questa era la setta d'i cattivi,<br />
    a Dio spiacenti e a' nemici sui.</p>

    <p>Questi sciaurati, che mai non fur vivi,<br />
    erano ignudi e stimolati molto<br />
    da mosconi e da vespe ch'eran ivi.</p>

    <p>Elle rigavan lor di sangue il volto,<br />
    che, mischiato di lagrime, a' lor piedi<br />
    da fastidiosi vermi era ricolto.</p>

    <p>E poi ch'a riguardar oltre mi diedi,<br />
    vidi genti a la riva d'un gran fiume;<br />
    per ch'io dissi: «Maestro, or mi concedi</p>

    <p>ch'i' sappia quali sono, e qual costume<br />
    le fa di trapassar parer sì pronte,<br />
    com'i' discerno per lo fioco lume».</p>

    <p>Ed elli a me: «Le cose ti fier conte<br />
    quando noi fermerem li nostri passi<br />
    su la trista riviera d'Acheronte».</p>

    <p>Allor con li occhi vergognosi e bassi,<br />
    temendo no 'l mio dir li fosse grave,<br />
    infino al fiume del parlar mi trassi.</p>

    <p>Ed ecco verso noi venir per nave<br />
    un vecchio, bianco per antico pelo,<br />
    gridando: «Guai a voi, anime prave!</p>

    <p>Non isperate mai veder lo cielo:<br />
    i' vegno per menarvi a l'altra riva<br />
    ne le tenebr /e etterne, in caldo e 'n gelo.</p>

    <p>E tu che se' costì, anima viva,<br />
    pàrtiti da cotesti che son morti».<br />
    Ma poi che vide ch'io non mi partiva,</p>

    <p>disse: «Per altra via, per altri porti<br />
    verrai a piaggia, non qui, per passare:<br />
    più lieve legno convien che ti porti».</p>

    <p>E 'l duca lui: «Caron, non ti crucciare:<br />
    vuolsi così colà dove si puote<br />
    ciò che si vuole, e più non dimandare».</p>

    <p>Quinci fuor quete le lanose gote<br />
    al nocchier de la livida palude,<br />
    che 'ntorno a li occhi avea di fiamme rote.</p>

    <p>Ma quell'anime, ch'eran lasse e nude,<br />
    cangiar colore e dibattero i denti,<br />
    ratto che 'nteser le parole crude.</p>

    <p>Bestemmiavano Dio e lor parenti,<br />
    l'umana spezie e 'l loco e 'l tempo e 'l seme<br />
    di lor semenza e di lor nascimenti.</p>

    <p>Poi si ritrasser tutte quante insieme,<br />
    forte piangendo, a la riva malvagia<br />
    ch'attende ciascun uom che Dio non teme.</p>

    <p>Caron dimonio, con occhi di br /agia<br />
    loro accennando, tutte le raccoglie;<br />
    batte col remo qualunque s'adagia.</p>

    <p>Come d'autunno si levan le foglie<br />
    l'una appresso de l'altra, fin che 'l ramo<br />
    vede a la terra tutte le sue spoglie,</p>

    <p>similemente il mal seme d'Adamo<br />
    gittansi di quel lito ad una ad una,<br />
    per cenni come augel per suo richiamo.</p>

    <p>Così sen vanno su per l'onda br /una,<br />
    e avanti che sien di là discese,<br />
    anche di qua nuova schiera s'auna.</p>

    <p>«Figliuol mio», disse 'l maestro cortese,<br />
    «quelli che muoion ne l'ira di Dio<br />
    tutti convegnon qui d'ogne paese;</p>

    <p>e pronti sono a trapassar lo rio,<br />
    ché la divina giustizia li sprona,<br />
    sì che la tema si volve in disio.</p>

    <p>Quinci non passa mai anima buona;<br />
    e però, se Caron di te si lagna,<br />
    ben puoi sapere omai che 'l suo dir suona».</p>

    <p>Finito questo, la buia campagna<br />
    tremò sì forte, che de lo spavento<br />
    la mente di sudore ancor mi bagna.</p>

    <p>La terra lagrimosa diede vento,<br />
    che balenò una luce vermiglia<br />
    la qual mi vinse ciascun sentimento;</p>

    <p>e caddi come l'uom cui sonno piglia.</p>
  </div>
</div>
):( <div className="container-text-explanation">
          <h2>Canto III – La Porta dell’Inferno</h2>
  
          <p>
            Nel <strong>Canto III</strong> dell’<strong>Inferno</strong>, Dante e Virgilio giungono alle porte
            dell’<strong>Inferno</strong>, dove leggono la celebr /e iscrizione che avverte i viandanti
            di <em>“abbandonare ogni speranza”</em>. Questa porta rappresenta il <strong>confine iniziatico</strong>,
            il passaggio dell’anima verso la consapevolezza della propria condizione decaduta.
          </p>
  
          <p>
            All’interno, incontrano le <strong>anime neutrali</strong>, coloro che in vita non scelsero né il bene
            né il male. Dal punto di vista esoterico, questi spiriti rappresentano lo <strong>stato di inerzia
            spirituale</strong>, dove l’anima non esercita il proprio libero arbitrio per evolvere. Sono condannati
            a un’esistenza di <strong>agitazione eterna</strong>, inseguiti da insetti e costretti a seguire
            una <strong>bandiera senza senso</strong>, simbolo della loro <strong>mancanza di direzione interiore</strong>.
          </p>
  
          <p>
            Successivamente, Dante e Virgilio raggiungono il <strong>fiume Acheronte</strong>, dove il traghettatore
            <strong> Caronte</strong> conduce le anime all’Inferno vero e proprio. L’Acheronte simboleggia il
            <strong> confine tra il mondo materiale e quello spirituale</strong>, il momento in cui l’anima
            affronta le conseguenze delle sue azioni e intraprende un cammino di purificazione o punizione.
          </p>
  
          <p>
            Il <strong>Canto III</strong> rappresenta quindi il primo grande <strong>passaggio spirituale</strong>:
            il riconoscimento del bisogno di trasformazione e l’accettazione che il cammino verso la redenzione
            passa attraverso la verità del proprio passato e il distacco dalle illusioni del mondo profano.
          </p>
  
          <h3>Simbolismo</h3>
          <ul>
            <li><strong>La porta dell’Inferno</strong></li>
            <li><strong>Le anime neutrali</strong></li>
            <li><strong>La bandiera senza senso</strong></li>
            <li><strong>Gli insetti che le tormentano</strong></li>
            <li><strong>Il fiume Acheronte</strong></li>
            <li><strong>Caronte, il traghettatore</strong></li>
          </ul>
                  <button
        className="read-canto-button"
        onClick={() => setOpenCanto(true)}
      >
        📖 Leggi il Canto completo
    </button>
        </div>) }
       
  
        <div className="container-images-explanation">
        <div className='carousel'>
          <img
            src={images[currentImage]}
            alt='Canto I'
            className={`carousel-image ${fade ? 'fade-in' : 'fade-out'}`}
          />
          <div className='carousel-dots'>
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentImage ? 'active' : ''}`}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setCurrentImage(index);
                    setFade(true);
                  }, 500);
                }}
              ></span>
            ))}
          </div>
        </div>  
        </div>
      </div>
    );
}

export {CantoInferoIII}