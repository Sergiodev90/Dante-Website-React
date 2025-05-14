import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';
const images = [
    '/src/assets/images/profeciabeatrice.webp',
    '/src/assets/images/passaggioparadiso.png',
    '/src/assets/images/purgatorioXXXIII.jpg'
  ];

function CantoPurgatorioXXXIII() {
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
          <h2>Canto XXXIII – La Conclusione del Purgatorio</h2>
  
          <p>
            Il <strong>Canto XXXIII</strong> chiude il viaggio di Dante nel <strong>Purgatorio</strong>.
            Qui, Dante si trova di fronte a <strong>Beatrice</strong>, che rappresenta la <strong>Sapienza divina</strong> e la <strong>Verità rivelata</strong>.
          </p>
  
          <p>
            Beatrice lo guida al <strong>fiume Eunoe</strong>, le cui acque permettono all’anima di
            <strong> ricordare tutto il bene compiuto</strong> nella vita, completando così il processo di purificazione
            iniziato con la cancellazione dei peccati. Questo è il momento del <strong>ricongiungimento con il divino</strong>.
          </p>
  
          <p>
            Prima che Dante beva dal fiume, Beatrice pronuncia una <strong>profezia</strong>: annuncia l’arrivo di
            un <strong>redentore misterioso</strong> che restaurerà l’ordine e la giustizia nel mondo, decaduto e corrotto.
            Questa parte è ricca di <strong>simbolismo occulto e immagini profetiche</strong>, velate ma potenti.
          </p>
  
          <p>
            Dal punto di vista esoterico, questo canto rappresenta la <strong>conclusione della purificazione dell’anima</strong>.
            Dante, ormai liberato dalle colpe, è pronto ad <strong>ascendere al Paradiso</strong> e a ricevere la visione diretta del mistero divino.
          </p>
  
          <p>
            Il canto suggerisce inoltre che l’anima, dopo la purificazione, non deve solo essere "pulita" dai suoi errori,
            ma anche <strong>rafforzata e arricchita</strong> nel <strong>ricordo spirituale della sua natura divina</strong>.
          </p>
  
          <h3>Simbolismi</h3>
          <ul>
            <li><strong>La profezia di Beatrice</strong></li>
            <li><strong>Il passaggio verso il Paradiso</strong></li>
            <li><strong>La restaurazione del mondo</strong></li>
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
  
  export { CantoPurgatorioXXXIII };
  