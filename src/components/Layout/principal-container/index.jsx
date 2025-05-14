import { useRef,useEffect,useState} from 'react';
import './principal-container.css'

function Principal_container(){
    const videoRef = useRef(null);
    const [showDivina, setShowDivina] = useState(false);
    const [moveComedia, setMoveComedia] = useState(false);
    const [moveLa,setMoveLa] = useState(false);
    const srcVideoBackgroundPrincipal = "https://www.binamic.it/sergio_script/my_files/output.mp4";
    
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play().catch((e) => {
          console.log('No se pudo reproducir automáticamente:', e);
        });
      }
    }, []);

    useEffect(() => {
        // 1s: mover COMEDIA
        const moveTimer = setTimeout(() => {
          setMoveComedia(true);
          setMoveLa(true)
          // 0.5s después: mostrar DIVINA con fade in
          const divinaTimer = setTimeout(() => {
            setShowDivina(true);
          }, 1000);
    
          return () => clearTimeout(divinaTimer);
        }, 2000);
    
        return () => clearTimeout(moveTimer);
      }, []);
    

    return(
        <>
            <section className='principal-container-presentation'>
                <div className='info-container-main'>
                <div className='overlay-dark'></div>
                <video
                    ref={videoRef}
                    src={srcVideoBackgroundPrincipal}
                    autoPlay
                    loop
                    playsInline
                    preload='auto'
                />                
                <div className='container-title-principal-presentation'>
                <h1>
                <span className={`word la ${moveLa ? 'shifted-first' : ''}`}>
                    LA
                    </span>{' '}
                <span className={`word divina ${showDivina ? 'visible' : ''}`}>
                    DIVINA
                 </span>{' '}
        <span className={`word comedia ${moveComedia ? 'shifted' : ''}`}>
             COMMEDIA
        </span>
                </h1>
                <h3>Dante Alighieri</h3>
                </div>
                </div>
            </section>
            <div className='background-black-video'></div>
        </>
    );
}

export {Principal_container}