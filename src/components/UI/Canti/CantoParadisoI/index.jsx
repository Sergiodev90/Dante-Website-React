import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';


const images = [
    '/src/assets/images/strutturaparadisoI.webp',
    '/src/assets/images/paradisoI.jpg',
    '/src/assets/images/luceparadisoi.avif'
  ];

function CantoParadisoI() {
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
       {openCanto ? (<div className="full-canto-text">
      <h2>Canto I - Paradiso</h2>
      <div className="text-canto">
        <p>La gloria di colui che tutto move<br />
        per l’universo penetra, e risplende<br />
        in una parte più e meno altrove.</p>

        <p>Nel ciel che più de la sua luce prende<br />
        fu’ io, e vidi cose che ridire<br />
        né sa né può chi di là sù discende;</p>

        <p>perché appressando sé al suo disire,<br />
        nostro intelletto si profonda tanto,<br />
        che dietro la memoria non può ire.</p>

        <p>Veramente quant’ io del regno santo<br />
        ne la mia mente potei far tesoro,<br />
        sarà ora materia del mio canto.</p>

        <p>O buona Appollo, a l’ultimo lavoro<br />
        fammi del tuo valor sì fatto vaso,<br />
        come dimandi a dar l’amato alloro.</p>

        <p>Infino a qui l’un giogo di Parnaso<br />
        assai mi fu; ma or con amendue<br />
        m’è uopo intrar ne l’aringo rimaso.</p>

        <p>Entra nel petto mio, e spira tue<br />
        sì come quando Marsia traesti<br />
        de la vagina de le membra sue.</p>

        <p>O divina virtù, se mi ti presti<br />
        tanto che l’ombra del beato regno<br />
        segnata nel mio capo io manifesti,</p>

        <p>vedra’ mi al piè del tuo diletto legno<br />
        venire, e coronarmi de le foglie<br />
        che la materia e tu mi farai degno.</p>

        <p>Si rade volte, padre, se ne coglie<br />
        per trionfare o Cesare o poeta<br />
        (colpa e vergogna de l’umane voglie),</p>

        <p>che partorir letizia in su la lieta<br />
        delfica deità dovria la fronda<br />
        peneia, quando alcun di sé asseta.</p>

        <p>Poca favilla gran fiamma seconda:<br />
        forse di retro a me con miglior voci<br />
        si pregherà perché Cirra risponda.</p>

        <p>Surgiò al mortale da un divino loco<br />
        che l’occhio mortale più su non gira,<br />
        e ’l cor risplende a quel che vien di foco.</p>

        <p>Non perché più ch’un semplice figura<br />
        fosse in quel lume che m’apparve prima<br />
        ch’io usassi più alto la mia natura,</p>

        <p>ma per effetto che ’l suo raggio lima<br />
        la vista mia, e l’animo la face<br />
        che per veder s’accende e poi sublima.</p>

        <p>Non c’è maggiore esempio di sua pace<br />
        che quel che la mia mente in sé comprende<br />
        quando al guardar s’unisce il dolce face.</p>

        <p>La donna mia che mi vedea sospeso,<br />
        attenta, e con affetto in vista santa,<br />
        lo sguardo ritornò verso di me e disse:</p>

        <p>«Drizza la mente in Dio grata e lieta,<br />
        che n’ha congiunti con la prima stella».</p>

        <p>Pareami che nube ne coprisse<br />
        lucente e stabile, e l’etterno spiro<br />
        in essa come fiamma arder visse.</p>

        <p>Fecemi poscia lo suo amor più fiero<br />
        e affabile con quella voce bella:<br />
        «In questo ciel che ha più ratto il giro</p>

        <p>si può vedere l’una parte e l’altra,<br />
        e ciò che in esso è, giusta sua natura,<br />
        con l’animo e la vista si appatra.</p>

        <p>Ma perché tu non resti a tal figura,<br />
        pensa che non è cielo, ma lo lume<br />
        ch’è forma di Dio, segno e fattura.</p>

        <p>Non perché altro sia, ma solo l’ume<br />
        dell’alto lume che a lui s’accorda<br />
        e lo fa degno di salir al nume.</p>

        <p>La verità di ciò che qui s’accorda<br />
        non è a discesa, ma per grazia infusa,<br />
        sì che la mente sua non si distorda.</p>

        <p>Veramente io già fui nel cielo che più<br />
        riceve de la sua luce, e vidi cose<br />
        che ridir né sa né può chi giù discende.</p>
      </div>
    </div>):(
      <div className="container-text-explanation">
          <h2>Canto I – L’Inizio dell’Ascesa Celeste</h2>
          <p>
            In questo primo canto del <strong>Paradiso</strong>, Dante ascende al <strong>Cielo della Luna</strong>,
            accompagnato da <strong>Beatrice</strong>, che lo guida nel viaggio verso i piani superiori della realtà celeste.
          </p>
  
          <p>
            Beatrice lo conduce attraverso una serie di <strong>visioni cosmiche</strong>, descrivendo la
            <strong> struttura gerarchica dell’universo</strong>. Il Cielo della Luna è il primo livello del Paradiso,
            dove risiedono le anime che furono fedeli ai loro voti, ma che per cause terrene non poterono mantenerli completamente.
          </p>
  
          <p>
            Il <strong>viaggio di Dante</strong> nel Paradiso è un’ascesa verso la <strong>luce divina</strong>.
            Beatrice, in quanto <strong>Sapienza divina</strong>, gli spiega le leggi dell’<strong>armonia cosmica</strong>
            e la connessione tra <strong>uomo e universo</strong>. In questo canto, Dante è inizialmente avvolto da una
            <strong> luce resplandente</strong>, simbolo della <strong>presenza divina</strong>.
          </p>
  
          <p>
            Dal punto di vista esoterico, il Canto I del Paradiso rappresenta l’inizio dell’unione dell’anima con la
            <strong> luce divina</strong>. Non si tratta più di purificazione, come nel Purgatorio, ma di
            <strong> elevazione verso la Verità assoluta</strong> e la <strong>connessione con la Sapienza eterna</strong>
            rappresentata da Beatrice.
          </p>
  
          <h3>Simbolismi</h3>
          <ul>
            <li><strong>La luce resplandente</strong></li>
            <li><strong>L’armonia cosmica</strong></li>
            <li><strong>La struttura gerarchica del Paradiso</strong></li>
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
  
  export { CantoParadisoI };
  