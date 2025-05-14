import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';


const images = [
    '/public/assets/images/santommaso.jpg',
    '/public/assets/images/cielodelsole.jpg',
    '/public/assets/images/paradisoXIII.jpg'
  ];

function CantoParadisoXIII() {
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
      <h2>Canto XIII - Paradiso</h2>
      <div className="text-canto">
        <p>Immaginando, quella gentilezza<br />
        che luce al terzo lume, sempre ammira<br />
        lo proprio raggio sì, che mai non cessa.</p>

        <p>E come l’alma mia si fe’ più dira,<br />
        da Beatrice sostenne quel lume<br />
        che l’avea già da tempo fatto mira.</p>

        <p>Come l’uom ch’odo da cosa vera assume,<br />
        e ciò che sente in sé non vede come,<br />
        sì che il suo intelletto l’abbandona e sume,</p>

        <p>tal mi sembiò che io non vedea il nome<br />
        di quel che vidi; e tanto l’era chiaro,<br />
        che l’abbagliar m’avea tolto il suo come.</p>

        <p>Quando la mente torna a quell’aspetto<br />
        che solo il guardo a Dio fa più ardente,<br />
        tanto comprendere si fa più stretto,</p>

        <p>che il ricordar non può seguitare l’ente;<br />
        ma ciò che posso di quel punto dire<br />
        è che più amor mi fu dato a la mente.</p>

        <p>Cominciò Beatrice: «L’eterno lume<br />
        di che ti parlo, infuso e in sé risplende<br />
        come un animale in sua pelle o lume;</p>

        <p>ma quello che lui stesso s’intende<br />
        è tanto che non è da creatura<br />
        che segni lui, però che a lui trascende.</p>

        <p>E poi che tu, figliuol, queste misure<br />
        udito hai, vedi se ti può contenne<br />
        la mente tua, ché tu sei in letture.</p>

        <p>Non è fantin che così prontamente<br />
        segue la madre, o fa il latte o l’ombra,<br />
        come l’occhio mio con l’anima intende.</p>

        <p>Onde Beatrice a lui: “O santo padre,<br />
        da quel che io veggio in tua luce chiara<br />
        risplender l’amor, che là giù tanto spira,</p>

        <p>e poi che con parlar sì delizioso<br />
        mi hai tratto, che io non posso non ridire<br />
        ciò che io ho udito, e ancor mi è gustoso,</p>

        <p>così, che più che il sol mi par la sera”.</p>

        <p>Così Beatrice. Ed egli incominciò:<br />
        “Chi fosse la mia lingua non saprei dire,</p>

        <p>ma nel suo lume discesi e scorsi:<br />
        tra quel vedere e il dir tanto si scema,<br />
        che nel suo intelletto a pena corsi.</p>

        <p>O mente mia, or leva a Dio la tema:<br />
        s’appressa tanto a lui che, per la grazia,<br />
        convien che l’alme altezza la dismema”.</p>

        <p>Così disse, e poi cominciò l’alta loda<br />
        di colui che fu sì grande scrittore<br />
        e di spirito santo alto custode.</p>

        <p>E seguì il canto sacro, con fervore<br />
        che non si può ridir, né si comprende<br />
        se non per grazia, al cor che Dio onore.</p>

        <p>Così Beatrice e il santo spirto intende,<br />
        e il mio intelletto e ‘l mio affetto insieme<br />
        legati vanno a quella dolce mende.</p>

        <p>Oh quanto è corto il dire e come fiemme<br />
        al pensier nostro! Che parole o voce<br />
        possono mai tradur quanto lì geme?</p>

        <p>Così Beatrice: “Dico, o anima voce,<br />
        che se l’omo non s’apre all’alto lume,<br />
        vano è ‘l predicar e vana la croce.</p>

        <p>Tu pensi che in uno estremo volume<br />
        racchiusa sia la somma di natura,<br />
        e ciò che puoi da essa e ciò che sume.</p>

        <p>Ma apri gli occhi al vero, e guarda pure<br />
        com’ella ha sparto d’intelletto il seme<br />
        per l’universo e sue forme future.</p>
      </div>
    </div>) : (<div className="container-text-explanation">
          <h2>Canto XIII – Il Cielo dei Sapienti</h2>
  
          <p>
            Nel <strong>Canto XIII</strong>, Dante continua la sua ascesa e raggiunge il <strong>Cielo del Sole</strong>,
            dove dimorano le <strong>anime dei sapienti</strong>.
          </p>
  
          <p>
            Qui <strong>San Tommaso d’Aquino</strong> prosegue il suo discorso, approfondendo temi come la
            <strong> sapienza divina</strong>, la <strong>creazione</strong> e i limiti della <strong>conoscenza umana</strong>.
          </p>
  
          <p>
            Tommaso spiega che il sapere umano è imperfetto, e che solo mediante la <strong>grazia divina</strong>
            si può accedere a una comprensione autentica della realtà.
          </p>
  
          <p>
            Dal punto di vista esoterico, questo canto rappresenta il momento in cui l’anima riconosce che
            la sola <strong>razionalità</strong> non è sufficiente per cogliere la <strong>verità assoluta</strong>.
            La vera sapienza nasce dall’unione tra <strong>intelletto</strong>, <strong>intuizione spirituale</strong>
            e <strong>rivelazione divina</strong>.
          </p>
  
          <p>
            Dante mostra che anche i più grandi sapienti sono soggetti a limiti, e che la <strong>umiltà
            davanti al Divino</strong> è essenziale per poter ascendere nella luce della conoscenza eterna.
          </p>
  
          <h3>Simbolismi</h3>
          <ul>
            <li><strong>San Tommaso d’Aquino</strong></li>
            <li><strong>Il Cielo del Sole</strong></li>
            <li><strong>La struttura circolare dei sapienti</strong></li>
          </ul>
                          <button
        className="read-canto-button"
        onClick={() => setOpenCanto(true)}
      >
        📖 Leggi il Canto completo
    </button>
        </div>)}
  
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
  
  export { CantoParadisoXIII };
  