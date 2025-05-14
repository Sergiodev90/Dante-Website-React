import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';


const images = [
    '/assets/images/montagnapurgatorio.jpeg',
    '/assets/images/lavaggiopurgatorio.jpg',
    '/assets/images/purgatorio.jpeg'
  ];


function CantoPurgatorioI() {
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
      <h2>Canto I - Purgatorio</h2>
      <div className="text-canto">
        <p>La gloria di colui che tutto muove,<br />
        per l’universo penetra, e risplende<br />
        in una parte più e meno prove.</p>

        <p>Vedi la gente che da l’inferno esce,<br />
        e pur risalendo il monte per la gran voglia<br />
        di giungere alla pace che li piace,</p>

        <p>colle leggi della purificazione,<br />
        e per questo il cammino a Dio si fa,</p>

        <p>e gli spunti oramai d’essa per la via.</p>

        <p>Il mio viaggio inizia, s’io te lo ricordo,<br />
        e con la luce che avanza e difetta<br />
        è questo che il cuore mi risiede.</p>

        <p>Non più restiamo a guardare l’ombra,<br />
        ma vediamo la luce che non è mai stata.</p>

        <p>Solito sentire l’anima che si fece,<br />
        guardando la verità di gran pace,<br />
        quella che sa dove stanno le bellezze.</p>

        <p>Il guardare eterno ora mi vede.<br />
        Quando il diavolo agisce come un peso,<br />
        mi si fa un bagliore che non sosta per il fine.</p>

        <p>O umili che accettano il dolore,<br />
        si aprono i cammini dei beati,<br />
        più chiari, per l’insegnamento di vita.</p>

        <p>Come colui che s’è di pace unito,<br />
        e poi confonde in mezzo al suo passaggio,<br />
        non s’assomiglia, ma si stende al grande viaggio.</p>

        <p>Più ora che afflitti si risvegliano.<br />
        I puri passano, ma viaggia bene<br />
        chi ben fa in sé per il cammino eterno.</p>

        <p>Da qui si giunge alla gloria o al danno.<br />
        Sali, ma con buoni modi in cammino,<br />
        per il bene e la grazia che conduce all’alto.</p>
      </div>
    </div>):(<div className="container-text-explanation">
          <h2>Canto I – L’Inizio del Purgatorio</h2>
  
          <p>
            Dopo essere usciti dall’Inferno, Dante e Virgilio emergono sulla riva della <strong>montagna del Purgatorio</strong>,
            che si innalza dall’<strong>oceano</strong> verso il cielo. Qui tutto cambia: l’aria è pura, e si respira una nuova
            speranza di redenzione.
          </p>
  
          <p>
            Incontrano <strong>Catone di Utica</strong>, il guardiano dell’ingresso al Purgatorio. Catone simboleggia l’anima che ha
            cercato la <strong>libertà spirituale</strong> sopra ogni cosa, anche a costo della propria vita.
          </p>
  
          <p>
            Prima di iniziare la salita, Virgilio <strong>purifica Dante</strong> lavandogli il viso, sporco dalla polvere infernale,
            e gli cinge i fianchi con un <strong>cinturone di erba fresca</strong>. Questo gesto rappresenta il
            <strong>rinascimento spirituale</strong> e la <strong>umiltà</strong> necessaria per intraprendere il cammino.
          </p>
  
          <p>
            Da un punto di vista esoterico, questo canto segna l’inizio del <strong>lavoro cosciente dell’anima</strong>
            verso la sua liberazione. Non si tratta più solo di riconoscere il peccato, come nell’Inferno,
            ma di <strong>purificarlo attivamente</strong> e <strong>ascendere</strong> verso la luce divina.
          </p>
  
          <h3>Simbolismi</h3>
          <ul>
            <li><strong>La montagna del Purgatorio</strong></li>
            <li><strong>L’oceano</strong></li>
            <li><strong>Catone di Utica</strong></li>
            <li><strong>Il lavaggio del volto di Dante</strong></li>
            <li><strong>Il cinturone di erba fresca</strong></li>
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
  
  export { CantoPurgatorioI };
  