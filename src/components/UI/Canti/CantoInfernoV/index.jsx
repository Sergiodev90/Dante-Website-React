import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';


const images = [
    '/src/assets/images/minosseinferno.jpg',
    '/src/assets/images/compassioneinferno.jpg',
    '/src/assets/images/vorticeinferno.jpeg'
  ];
function CantoInferoV(){
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
        <h2>Canto V – I Lussuriosi</h2>

        <p>
          Nel <strong>Canto V</strong>, Dante e Virgilio scendono nel <strong>secondo cerchio dell’Inferno</strong>,
          dove vengono giudicate le anime dei <strong>lussuriosi</strong>. Qui incontrano <strong>Minosse</strong>,
          il giudice infernale, che <strong>avvolge la sua coda</strong> per indicare a quale cerchio ogni anima deve essere destinata,
          simboleggiando la misura esatta delle colpe individuali.
        </p>

        <p>
          I due poeti osservano poi gli <strong>spiriti degli amanti condannati</strong>, trascinati per sempre da un
          <strong> vortice infernale</strong>. Tra questi, emergono le figure di <strong>Paolo e Francesca</strong>,
          che raccontano la loro storia di <strong>amore proibito e omicidio</strong>.
        </p>

        <p>
          Dal punto di vista esoterico, questo canto mostra come la <strong>passione non sublimata</strong> ostacoli
          l’ascesa dell’anima, intrappolandola nel ciclo del <strong>desiderio e dell’illusione</strong>. La tempesta
          rappresenta la forza cieca degli <strong>istinti non trasformati</strong> in amore superiore o in compassione consapevole.
        </p>

        <p>
          L’incontro di Dante con Francesca è anche un <strong>avvertimento spirituale</strong>: la
          <strong> compassione non illuminata</strong> può diventare un vincolo che trattiene l’anima, se non si comprende
          la necessità della <strong>giustizia cosmica</strong>.
        </p>

        <h3>Simbolismi</h3>
        <ul>
          <li><strong>Minosse e la sua coda</strong></li>
          <li><strong>Il vortice infernale</strong></li>
          <li><strong>Paolo e Francesca</strong></li>
          <li><strong>La compassione di Dante</strong></li>
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

export {CantoInferoV}