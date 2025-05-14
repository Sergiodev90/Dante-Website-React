import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';


const images = [
    '/src/assets/images/paradisoXXXIII.jpg',
    '/src/assets/images/paradisoXXXIII2.jpg',
    '/src/assets/images/paradisoXXXIII3.jpg'
  ];


function CantoParadisoXXXIII() {
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
    return (
      <div className="canto-explanation">
      {openCanto ? (    <div className="full-canto-text">
      <h2>Canto XXXIII - Paradiso</h2>
      <div className="text-canto">
        <p>Vergine madre, figlia del tuo figlio,<br />
        umile e alta più che creatura,<br />
        termine fisso d’etterno consiglio,</p>

        <p>tu se’ colei che l’umana natura<br />
        nobilitasti sì, che ’l suo fattore<br />
        non disdegnò di farsi sua fattura.</p>

        <p>Nel ventre tuo si raccese l’amore<br />
        per lo cui caldo ne l’etterna pace<br />
        così è germinato questo fiore.</p>

        <p>Qui se’ a noi meridiana face<br />
        di caritate, e giuso, intra i mortali,<br />
        se’ di speranza fontana vivace.</p>

        <p>Donna, se’ tanto grande e tanto vali,<br />
        che qual vuol grazia ed a te non ricorre,<br />
        sua disianza vuol volar sanz’ali.</p>

        <p>La tua benignità non pur soccorre<br />
        a chi domanda, ma molte fiate<br />
        liberamente al dimandar precorre.</p>

        <p>In te misericordia, in te pietate,<br />
        in te magnificenza, in te s’aduna<br />
        quantunque in creatura è di bontate.</p>

        <p>Or questi, che da l’infima lacuna<br />
        de l’universo infin qui ha vedute<br />
        le vite spirituali ad una ad una,</p>

        <p>supplica a te, per grazia, di virtute<br />
        tanto, che possa con li occhi levarsi<br />
        più alto verso l’ultima salute.</p>

        <p>E io, che mai per mio veder non arsi<br />
        più ch’i’ fo per lo suo, tutti miei prieghi<br />
        ti porgo, e priego che non sieno scarsi,</p>

        <p>perché tu ogne nube li disleghi<br />
        di sua mortalità co’ prieghi tuoi,<br />
        sì che ‘l sommo piacer li si dispieghi.</p>

        <p>Ancor ti priego, regina, che puoi<br />
        ciò che tu vuoli, che conservi sani,<br />
        dopo tanto veder, li affetti suoi.</p>

        <p>Vinca tua guardia i movimenti umani:<br />
        vedi Beatrice con quanti beati<br />
        per li miei prieghi ti chiudon le mani!</p>

        <p>Li occhi da Dio diletti e venerati,<br />
        fissi ne l’orator, ne dimostraro<br />
        quanto i devoti prieghi le son grati.</p>

        <p>Indi a l’etterno lume s’addrizzaro,<br />
        nel qual non si dee creder che s’invii<br />
        per creatura l’occhio tanto chiaro.</p>

        <p>E io ch’al fine di tutt’ i disii<br />
        appropinquava, sì com’io dovea,<br />
        l’ardor del desiderio in me finii.</p>

        <p>Bernardo m’accennava, e sorridea,<br />
        perché io guardassi suso; ma io era<br />
        già per me stesso tal qual ei volea:</p>

        <p>ché la mia vista, venendo sincera,<br />
        e più e più intrava per lo raggio<br />
        de l’alta luce che da sé è vera.</p>

        <p>Da quinci innanzi il mio veder fu maggio<br />
        che ’l parlar mostra, ch’a tal vista cede,<br />
        e cede la memoria a tanto oltraggio.</p>

        <p>Qual è ’l fantolin che ’nver’ la mamma tende<br />
        la mano, poi che ’l latte ha preso,<br />
        per l’animo che ‘n lui si stende,</p>

        <p>ciascun di que’ beati al lume acceso<br />
        fisso con occhi stava, e da quell’atto<br />
        la mente mia fu in contemplar sospesa.</p>

        <p>Da quinci innanzi il mio veder fu maggio<br />
        che ’l parlar mostra: a tal vista cede,<br />
        e cede la memoria a tanto oltraggio.</p>

        <p>A l’alta fantasia qui mancò possa;<br />
        ma già volgeva il mio disio e ’l velle,<br />
        sì come rota ch’igualmente è mossa,</p>

        <p>l’amor che move il sole e l’altre stelle.</p>
      </div>
    </div>) : (<div className="container-text-explanation">
          <h2>Canto XXXIII – La Visione Finale di Dio</h2>
  
          <p>
            Nell’<strong>ultimo canto</strong>, Dante giunge al culmine del suo viaggio: la <strong>visione diretta di Dio</strong>.
            Guidato da <strong>Beatrice</strong> fino al limite della comprensione umana, riceve infine l’assistenza di
            <strong> San Bernardo di Chiaravalle</strong>, che eleva una preghiera alla <strong>Vergine Maria</strong> affinché Dante riceva
            la grazia necessaria per contemplare il <strong>Mistero Divino</strong>.
          </p>
  
          <p>
            Dopo la preghiera, Dante ha una visione straordinaria: contempla una <strong>luce infinita</strong>,
            nella quale percepisce sia l’<strong>Unità divina</strong> sia il <strong>mistero della Trinità</strong>.
          </p>
  
          <p>
            Scorge anche il riflesso della <strong>natura umana unita alla divinità</strong> (Cristo), come parte
            dell’eterno mistero. Tuttavia, né le parole né la mente umana sono in grado di esprimere pienamente
            questa esperienza: Dante può solo suggerire <strong>l’estasi</strong> e la <strong>fusione della sua volontà con quella divina</strong>.
          </p>
  
          <p>
            Dal punto di vista esoterico, il Canto XXXIII rappresenta la <strong>unione mistica definitiva</strong>,
            il momento in cui l’anima si fonde con la <strong>Fonte di tutta l’esistenza</strong>: l’<strong>Uno</strong>.
          </p>
  
          <p>
            È la <strong>consumazione del processo di purificazione e ascesa spirituale</strong>, dove ogni separazione tra l’<em>io</em>
            e il <em>Tutto</em> svanisce nella luce dell’Assoluto.
          </p>
  
          <h3>Simbolismi</h3>
          <ul>
            <li><strong>La Vergine Maria</strong></li>
            <li><strong>La Luce Infinita</strong></li>
            <li><strong>La Visione della Trinità</strong></li>
          </ul>
      <button
        className="read-canto-button"
        onClick={() => setOpenCanto(true)}
      >
        📖 Leggi il Canto completo
    </button>
        </div>
  )}
        
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
  
  export { CantoParadisoXXXIII };
  