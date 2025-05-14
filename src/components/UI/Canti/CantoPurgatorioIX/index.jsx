import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';


const images = [
    '/src/assets/images/aquilapurgatorio.jpg',
    '/src/assets/images/setteppurgatorio.jpg',
    '/src/assets/images/purgatorioangello.jpg'
  ];

function CantoPurgatorioIX() {
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
          <h2>Canto IX – La Porta del Purgatorio</h2>
  
          <p>
            In questo canto, Dante vive un <strong>sogno visionario</strong> mentre dorme ai piedi della montagna:
            sogna di essere sollevato da un’<strong>aquila dorata</strong> verso il fuoco celeste, proprio come
            <strong> Ganimede</strong> nella mitologia classica.
          </p>
  
          <p>
            Al risveglio, si trova davanti alla <strong>porta del vero Purgatorio</strong>, custodita da un
            <strong> angelo guardiano</strong>. Virgilio lo conduce fino alla soglia, dove l’angelo incide sulla
            fronte di Dante <strong>sette lettere "P"</strong> – una per ogni <strong>peccato capitale</strong>.
          </p>
  
          <p>
            L’angelo gli consegna anche <strong>due chiavi</strong>, una d’oro e una d’argento, che apriranno la porta.
            Tuttavia, avverte: <strong>nessuno potrà entrare senza vero pentimento</strong>.
          </p>
  
          <p>
            Dal punto di vista esoterico, questo canto rappresenta una vera e propria <strong>iniziazione spirituale</strong>:
            l’anima deve <strong>risvegliarsi</strong> (il sogno), <strong>elevare la propria coscienza</strong> (l’aquila),
            <strong>purificarsi</strong> (le sette "P") e <strong>essere ammessa</strong> al cammino interiore.
          </p>
  
          <p>
            La <strong>porta del Purgatorio</strong> è il <strong>confine sacro</strong> tra il mondo profano e la
            vera trasformazione dell’essere. Le <strong>due chiavi</strong> simboleggiano il <strong>doppio lavoro dell’anima</strong>:
            <em>fede e ragione, cuore e mente</em>.
          </p>
  
          <h3>Simbolismi</h3>
          <ul>
            <li><strong>L’aquila che solleva Dante</strong></li>
            <li><strong>Le sette "P" sulla fronte</strong></li>
            <li><strong>Le due chiavi (oro e argento)</strong></li>
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
  
  export { CantoPurgatorioIX };
  