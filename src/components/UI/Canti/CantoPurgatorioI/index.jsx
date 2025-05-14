import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';


const images = [
    '/src/assets/images/montagnapurgatorio.jpeg',
    '/src/assets/images/lavaggiopurgatorio.jpg',
    '/src/assets/images/purgatorio.jpeg'
  ];


function CantoPurgatorioI() {
            const [currentImage, setCurrentImage] = useState(0);
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
        <div className="container-text-explanation">
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
        </div>
  
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
  