import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';


const images = [
    '/src/assets/images/santommaso.jpg',
    '/src/assets/images/cielodelsole.jpg',
    '/src/assets/images/paradisoXIII.jpg'
  ];

function CantoParadisoXIII() {
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
  
  export { CantoParadisoXIII };
  