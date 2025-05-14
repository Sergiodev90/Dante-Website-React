import React, { useRef, useEffect, useState } from 'react';
import './second_container.css';

function Second_container() {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  const [activeIndex1, setActiveIndex1] = useState(1);
  const [activeIndex2, setActiveIndex2] = useState(1);

  const isMobile = () => {
    return window.matchMedia("(max-width: 599px)").matches ? "-200px" : "-100px";
  };

  const animationScale = (elements, direction) => {
    let scaleFactor = 1;
    let translationX = 0;
    let zIndex = 10;

    elements.forEach((el) => {
      scaleFactor -= 0.08;
      zIndex--;

      if (direction === 'right') {
        translationX += 20;
        el.style.marginLeft = isMobile();
        el.style.marginRight = "0";
      } else {
        translationX -= 20;
        el.style.marginRight = isMobile();
        el.style.marginLeft = "0";
      }

      el.style.transform = `translate3D(${translationX}px, 0px, 0px) scale3d(${scaleFactor}, ${scaleFactor}, 1)`;
      el.style.zIndex = zIndex;
    });
  };

  const transformScaleImages = (containerRef, index) => {
    const images = Array.from(containerRef.current.querySelectorAll("img"));

    images.forEach(img => {
      img.classList.remove("immagine_grande");
      img.style.transform = "translate3D(0px,0px,0px) scale3d(1,1,1)";
      img.style.zIndex = "10";
      img.style.marginLeft = "0";
      img.style.marginRight = "0";
    });

    const main = images[index];
    main.classList.add("immagine_grande");
    main.style.zIndex = "20";

    const leftArray = images.slice(0, index).reverse();
    const rightArray = images.slice(index + 1);

    animationScale(rightArray, "right");
    animationScale(leftArray, "left");
  };

  useEffect(() => {
    transformScaleImages(containerRef1, activeIndex1);
  }, [activeIndex1]);

  useEffect(() => {
    transformScaleImages(containerRef2, activeIndex2);
  }, [activeIndex2]);

  const imageList = [
    '/public/assets/images/hermes.jpeg',
    '/public/assets/images/paradiso_uomo.jpeg',
    '/public/assets/images/tantra.jpg'
  ];
  const imageListSecond = [
    './public/assets/images/inferno.jpg',
    './public/assets/images/purgatorio.jpeg',
    './public/assets/images/paradiso.webp'
  ]

  return (
    <section className='second-container-section'>
      <div className='container-second'>
        <h2>LA DIVINA COMMEDIA NELLA SPIRITUALITÀ</h2>

        {/* Primer bloque */}
        <div className='container-text-second_first'>
          <div className='container_text'>
            <p>
L'opera di Dante è particolarmente importante nell'esoterismo perché offre una mappa simbolica che non solo riflette il cammino spirituale cristiano, ma anche le trasformazioni dell'anima umana che corrispondono agli insegnamenti delle antiche scuole dei misteri, come l'alchimia o la filosofia ermetica. Gli occultisti vedono la Divina Commedia come un manuale per raggiungere il risveglio spirituale e l'ascesa verso una comprensione superiore dell'universo.            </p>
          </div>
          <div className="container_images" ref={containerRef1}>
            {imageList.map((src, index) => (
              <img
                key={`img1-${index}`}
                src={src}
                className={index === 1 ? 'starter-scale' : ''}
                onMouseEnter={() => setActiveIndex1(index)}
              />
            ))}
          </div>
        </div>

        {/* Segundo bloque */}
        <div className='container-text-second_second'>
          <div className='container_text'>
            <p>
            La Divina Commedia non è solo un poema sulla vita dopo la morte, ma un'opera profondamente esoterica che affronta la purificazione dell'anima attraverso simboli e riferimenti occulti.
            </p>
          </div>
          <div className="container_images" ref={containerRef2}>
            {imageListSecond.map((src, index) => (
              <img
                key={`img2-${index}`}
                src={src}
                className={index === 1 ? 'starter-scale' : ''}
                onMouseEnter={() => setActiveIndex2(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Second_container };
