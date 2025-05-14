import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';

const images = [
    './public/assets/images/leoneinferno.jpg',
    './public/assets/images/panterinferno.jpg',
    './public/assets/images/lupainferno.jpg'
  ];

function CantoInferoI(){
    const [currentImage, setCurrentImage] = useState(0);
    const  [openCanto,setOpenCanto] = useState(false);
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
        {openCanto ? (<div className="full-canto-text">
  <h2>Inferno - Canto I</h2>
  <div className='text-canto'>
  <p>
    Nel mezzo del cammin di nostra vita<br />
    mi ritrovai per una selva oscura,<br />
    ché la diritta via era smarrita.
  </p>
  <p>
    Ahi quanto a dir qual era è cosa dura<br />
    esta selva selvaggia e aspra e forte<br />
    che nel pensier rinova la paura!
  </p>
  <p>
    Tant’è amara che poco è più morte;<br />
    ma per trattar del ben ch’i’ vi trovai,<br />
    dirò de l’altre cose ch’i’ v’ho scorte.
  </p>
  <p>
    Io non so ben ridir com’i’ v’intrai,<br />
    tant’era pien di sonno a quel punto<br />
    che la verace via abbandonai.
  </p>
  <p>
    Ma poi ch’i’ fui al piè d’un colle giunto,<br />
    là dove terminava quella valle<br />
    che m’avea di paura il cor compunto,
  </p>
  <p>
    guardai in alto e vidi le sue spalle<br />
    vestite già de’ raggi del pianeta<br />
    che mena dritto altrui per ogne calle.
  </p>
  <p>
    Allor fu la paura un poco queta,<br />
    che nel lago del cor m’era durata<br />
    la notte ch’i’ passai con tanta pieta.
  </p>
  <p>
    E come quei che con lena affannata,<br />
    uscito fuor del pelago a la riva,<br />
    si volge a l’acqua perigliosa e guata,
  </p>
  <p>
    così l’animo mio, ch’ancor fuggiva,<br />
    si volse a retro a rimirar lo passo<br />
    che non lasciò già mai persona viva.
  </p>
  <p>
    Poi ch’èi posato un poco il corpo lasso,<br />
    ripresi via per la piaggia diserta,<br />
    sì che ’l piè fermo sempre era ’l più basso.
  </p>
  <p>
    Ed ecco, quasi al cominciar de l’erta,<br />
    una lonza leggera e presta molto,<br />
    che di pel maculato era coverta;
  </p>
  <p>
    e non mi si partia dinanzi al volto,<br />
    anzi ’mpediva tanto il mio cammino,<br />
    ch’i’ fui per ritornar più volte vòlto.
  </p>
  <p>
    Temp’era dal principio del mattino,<br />
    e ’l sol montava ’n sù con quelle stelle<br />
    ch’eran con lui quando l’amor divino
  </p>
  <p>
    mosse di prima quelle cose belle;<br />
    sì ch’a bene sperar m’era cagione<br />
    di quella fiera a la gaetta pelle
  </p>
  <p>
    l’ora del tempo e la dolce stagione;<br />
    ma non sì che paura non mi desse<br />
    la vista che m’apparve d’un leone.
  </p>
  <p>
    Questi parea che contra me venisse<br />
    con la test’alta e con rabbiosa fame,<br />
    sì che parea che l’aere ne tremesse.
  </p>
  <p>
    Ed una lupa, che di tutte brame<br />
    sembiava carca ne la sua magrezza,<br />
    e molte genti fé già viver grame,
  </p>
  <p>
    questa mi porse tanto di gravezza<br />
    con la paura ch’uscìa di sua vista,<br />
    ch’io perdei la speranza de l’altezza.
  </p>
  <p>
    E qual è quei che volontieri acquista,<br />
    e giunge ’l tempo che perder lo face,<br />
    che ’n tutt’i suoi pensier piange e s’attrista;
  </p>
  <p>
    tal mi fece la bestia sanza pace,<br />
    che, venendomi ’ncontro, a poco a poco<br />
    mi ripigneva là dove ’l sol tace.
  </p>
  <p>
    Mentre ch’i’ rovinava in basso loco,<br />
    dinanzi a li occhi mi si fu offerto<br />
    chi per lungo silenzio parea fioco.
  </p>
  <p>
    Quando vidi costui nel gran diserto,<br />
    “Miserere di me” gridai a lui,<br />
    “qual che tu sii, od ombra od omo certo!”.
  </p>
  <p>
    Rispuosemi: “Non omo, omo già fui,<br />
    e li parenti miei furon lombardi,<br />
    mantoani per patria ambedui.
  </p>
  <p>
    Nacqui sub Iulio, ancor che fosse tardi,<br />
    e vissi a Roma sotto ’l buono Augusto<br />
    nel tempo de li dèi falsi e bugiardi.
  </p>
  <p>
    Poeta fui, e cantai di quel giusto<br />
    figliuol d’Anchise che venne di Troia,<br />
    poi che ’l superbo Ilión fu combusto.
  </p>
  <p>
    Ma tu perché ritorni a tanta noia?<br />
    perché non sali il dilettoso monte<br />
    ch’è principio e cagion di tutta gioia?”.
  </p>
  <p>
    “Or se’ tu quel Virgilio e quella fonte<br />
    che spandi di parlar sì largo fiume?”<br />
    rispuos’io lui con vergognosa fronte.
  </p>
  <p>
    “O de li altri poeti onore e lume,<br />
    vagliami ’l lungo studio e ’l grande amore<br />
    che m’ha fatto cercar lo tuo volume.
  </p>
  <p>
    Tu se’ lo mio maestro e ’l mio autore,<br />
    tu se’ solo colui da cu’ io tolsi<br />
    lo bello stilo che m’ha fatto onore.
  </p>
  <p>
    Vedi la bestia per cu’ io mi volsi:<br />
    aiutami da lei, famoso saggio,<br />
    ch’ella mi fa tremar le vene e i polsi”.
  </p>
  <p>
    “A te convien tenere altro viaggio”,<br />
    rispuose, poi che lagrimar mi vide,<br />
    “se vuo’ campar d’esto loco selvaggio;
  </p>
  <p>
    ché questa bestia, per la qual tu gride,<br />
    non lascia altrui passar per la sua via,<br />
    ma tanto lo ’mpedisce che l’uccide;
  </p>
  <p>
    e ha natura sì malvagia e ria,<br />
    che mai non empie la bramosa voglia,<br />
    e dopo ’l pasto ha più fame che pria.
  </p>
  <p>
    Molti son li animali a cui s’ammoglia,<br />
    e più saranno ancora, infin che ’l veltro<br />
    verrà, che la farà morir con doglia.
  </p>
  <p>
    Questi non ciberà terra né peltro,<br />
    ma sapienza, amore e virtute,<br />
    e sua nazion sarà tra feltro e feltro.
  </p>
  <p>
    Di quella umile Italia fia salute<br />
    per cui morì la vergine Cammilla,<br />
    Eurialo e Turno e Niso di ferute.
  </p>
  <p>
    Questi la caccerà per ogne villa,<br />
    fin che l’avrà rimessa ne lo ’nferno,<br />
    là onde ’nvidia prima dipartilla.
  </p>
  <p>
    Ond’io per lo tuo me’ penso e discerno<br />
    che tu mi segui, e io sarò tua guida,<br />
    e trarrotti di qui per loco etterno;
  </p>
  <p>
    ove udirai le disperate strida,<br />
    vedrai li antichi spiriti dolenti,<br />
    che la seconda morte ciascun grida;
  </p>
  <p>
    e vederai color che son contenti<br />
    nel foco, perché speran di venire<br />
    quando che sia a le beate genti.
  </p>
  <p>
    A le quai poi se tu vorrai salire,<br />
    anima fia a ciò più di me degna:<br />
    con lei ti lascerò nel mio partire;
  </p>
  <p>
    ché quello imperador che là sù regna,<br />
    perch’i’ fu’ ribellante a la sua legge,<br />
    non vuol che ’n sua città per me si vegna.
  </p>
  <p>
    In tutte parti impera e quivi regge;<br />
    quivi è la sua città e l’alto seggio:<br />
    oh felice colui cu’ ivi elegge!”.
  </p>
  <p>
    E io a lui: “Poeta, io ti richeggio<br />
    per quello Dio che tu non conoscesti,<br />
    acciò ch’io fugga questo male e peggio,
  </p>
  <p>
    che tu mi meni là dov’or dicesti,<br />
    sì ch’io veggia la porta di san Pietro<br />
    e color cui tu fai cotanto mesti”.
  </p>
  <p>
    Allor si mosse, e io li tenni dietro.
  </p>
  </div>
</div>
):(
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
        <button
        className="read-canto-button"
        onClick={() => setOpenCanto(true)}
      >
        📖 Leggi il Canto completo
    </button>
        </div>)}
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