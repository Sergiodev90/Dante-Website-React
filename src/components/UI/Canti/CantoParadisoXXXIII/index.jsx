import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';


const images = [
    '/src/assets/images/paradisoXXXIII.jpg',
    '/src/assets/images/paradisoXXXIII2.jpg',
    '/src/assets/images/paradisoXXXIII3.jpg'
  ];


function CantoParadisoXXXIII() {
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
  
  export { CantoParadisoXXXIII };
  