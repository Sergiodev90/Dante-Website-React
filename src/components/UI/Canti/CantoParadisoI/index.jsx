import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';


const images = [
    '/src/assets/images/strutturaparadisoI.webp',
    '/src/assets/images/paradisoI.jpg',
    '/src/assets/images/luceparadisoi.avif'
  ];

function CantoParadisoI() {
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
  
  export { CantoParadisoI };
  