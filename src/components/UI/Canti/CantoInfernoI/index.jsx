import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';

const images = [
    '/src/assets/images/leoneinferno.jpg',
    '/src/assets/images/panterinferno.jpg',
    '/src/assets/images/lupainferno.jpg'
  ];

function CantoInferoI(){
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
        <div className='canto-explanation'>
        <div className='container-text-explanation'>
        <h2>Canto I - La Selva Oscura</h2>
        <p>
          Nel primo canto della Divina Commedia, Dante si trova smarrito nella <strong>Selva Oscura</strong>,
          che rappresenta lo stato di <strong>confusione e peccato</strong> dell'anima umana. Questa selva simboleggia
          lo <strong>smarrimento dal cammino spirituale</strong> e il momento di crisi interiore in cui l'essere umano
          è lontano dal suo scopo divino.
        </p>

        <h3>Simbolismo</h3>
        <ul>
          <li><strong>La selva oscura</strong>: rappresenta lo <strong>stato dell'anima</strong> prima di iniziare il suo processo di <strong>trasformazione spirituale</strong>. Nell’esoterismo, questo luogo è associato al <strong>mondo delle ombre</strong>, all’<strong>ego</strong> e all’<strong>ignoranza</strong>. È il punto di partenza per la <strong>purificazione</strong> della mente e dell’anima.</li>
          <li>Dante si trova in uno stato di disorientamento, che riflette l’inizio del cammino spirituale per molte persone, prima di sperimentare un risveglio interiore.</li>
          <li><strong>Le tre fiere</strong>:
            <ul>
              <li>Il <strong>leone</strong>: simboleggia <strong>l’orgoglio</strong> e il <strong>dispoticismo</strong>.</li>
              <li>La <strong>pantera</strong>: rappresenta la <strong>lussuria</strong> e la <strong>tentazione</strong>.</li>
              <li>La <strong>lupa</strong>: incarna l’<strong>avidità</strong> e l’<strong>egoismo</strong>.</li>
            </ul>
          </li>
        </ul>

        <p>
          Ogni fiera rappresenta un ostacolo che impedisce all’anima di avanzare verso la luce, simbolizzando
          le forze interiori che la tengono intrappolata nel ciclo del peccato.
        </p>
        </div>
        <div className='container-images-explanation'>
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

export {CantoInferoI}