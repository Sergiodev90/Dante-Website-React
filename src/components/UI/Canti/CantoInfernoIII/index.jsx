import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';


const images = [
    '/src/assets/images/portainferno.jpg',
    '/src/assets/images/labandierainferno.jpeg',
    '/src/assets/images/caronteinferno.png'
  ];
function CantoInferoIII(){
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
    return(
        <div className="canto-explanation">
        <div className="container-text-explanation">
          <h2>Canto III – La Porta dell’Inferno</h2>
  
          <p>
            Nel <strong>Canto III</strong> dell’<strong>Inferno</strong>, Dante e Virgilio giungono alle porte
            dell’<strong>Inferno</strong>, dove leggono la celebre iscrizione che avverte i viandanti
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

export {CantoInferoIII}