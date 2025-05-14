import '../stylesCanti/stylesCanti.css'
import { useState,useEffect } from 'react';


const images = [
    '/src/assets/images/minosseinferno.jpg',
    '/src/assets/images/compassioneinferno.jpg',
    '/src/assets/images/vorticeinferno.jpeg'
  ];
function CantoInferoV(){
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
        <div className="canto-explanation">
        {openCanto ? (    <div className="full-canto-text">
      <h2>Canto V - Inferno</h2>
      <div className="text-canto">
        <p>Così discesi del cerchio primaio<br/>
        giù nel secondo, che men loco cinghia<br/>
        e tanto più dolor, che punge a guaio.</p>

        <p>Stavvi Minòs orribilmente, e ringhia:<br/>
        essamina le colpe ne l’intrata;<br/>
        giudica e manda secondo ch’avvinghia.</p>

        <p>Dico che quando l’anima mal nata<br/>
        li vien dinanzi, tutta si confessa;<br/>
        e quel conoscitor de le peccata</p>

        <p>vede qual loco d’inferno è da essa;<br/>
        cignesi con la coda tante volte<br/>
        quantunque gradi vuol che giù sia messa.</p>

        <p>Sempre dinanzi a lui ne stanno molte:<br/>
        vanno a vicenda ciascuna al giudizio,<br/>
        dicono e odono e poi son giù volte.</p>

        <p>«O tu che vieni al doloroso ospizio»,<br/>
        disse Minòs a me quando mi vide,<br/>
        lasciando l’atto di cotanto offizio,</p>

        <p>«guarda com’entri e di cui tu ti fide;<br/>
        non t’inganni l’ampiezza de l’intrare!».<br/>
        E ’l duca mio a lui: «Perché pur gride?</p>

        <p>Non impedir lo suo fatale andare:<br/>
        vuolsi così colà dove si puote<br/>
        ciò che si vuole, e più non dimandare».</p>

        <p>Or incomincian le dolenti note<br/>
        a farmisi sentire; or son venuto<br/>
        là dove molto pianto mi percuote.</p>

        <p>Io venni in loco d’ogne luce muto,<br/>
        che mugghia come fa mar per tempesta,<br/>
        se da contrari venti è combattuto.</p>

        <p>La bufera infernal, che mai non resta,<br/>
        mena li spirti con la sua rapina;<br/>
        voltando e percotendo li molesta.</p>

        <p>Quando giungon davanti a la ruina,<br/>
        quivi le strida, il compianto, il lamento;<br/>
        bestemmian quivi la virtù divina.</p>

        <p>Intesi ch’a così fatto tormento<br/>
        enno dannati i peccator carnali,<br/>
        che la ragion sommettono al talento.</p>

        <p>E come li stornei ne portan l’ali<br/>
        nel freddo tempo, a schiera larga e piena,<br/>
        così quel fiato li spiriti mali</p>

        <p>di qua, di là, di giù, di sù li mena;<br/>
        nulla speranza li conforta mai,<br/>
        non che di posa, ma di minor pena.</p>

        <p>E come i gru van cantando lor lai,<br/>
        faccendo in aere di sé lunga riga,<br/>
        così vid’io venir, traendo guai,</p>

        <p>ombre portate da la detta briga;<br/>
        per ch’i’ dissi: «Maestro, chi son quelle<br/>
        genti che l’aura nera sì gastiga?».</p>

        <p>«La prima di color di cui novelle<br/>
        tu vuo’ saper», mi disse quelli allotta,<br/>
        «fu imperadrice di molte favelle.</p>

        <p>A vizio di lussuria fu sì rotta,<br/>
        che libito fé licito in sua legge,<br/>
        per tòrre il biasmo in che era condotta.</p>

        <p>Ell’è Semiramìs, di cui si legge<br/>
        che succedette a Nino e fu sua sposa:<br/>
        tenne la terra che ’l Soldan corregge.</p>

        <p>L’altra è colei che s’ancise amorosa,<br/>
        e ruppe fede al cener di Sicheo;<br/>
        poi è Cleopatràs lussurïosa.</p>

        <p>Elena vedi, per cui tanto reo<br/>
        tempo si volse, e vedi ’l grande Achille,<br/>
        che con amore al fine combatteo.</p>

        <p>Vedi Parìs, Tristano»; e più di mille<br/>
        ombre mostrommi e nominommi a dito,<br/>
        ch’amor di nostra vita dipartille.</p>

        <p>Poscia ch’io ebbi ’l mio dottore udito<br/>
        nomar le donne antiche e ’ cavalieri,<br/>
        pietà mi giunse, e fui quasi smarrito.</p>

        <p>I’ cominciai: «Poeta, volontieri<br/>
        parlerei a quei due che ’nsieme vanno,<br/>
        e paion sì al vento esser leggeri».</p>

        <p>Ed elli a me: «Vedrai quando saranno<br/>
        più presso a noi; e tu allor li priega<br/>
        per quello amor che i mena, ed ei verranno».</p>

        <p>Sì tosto come il vento a noi li piega,<br/>
        mossi la voce: «O anime affannate,<br/>
        venite a noi parlar, s’altri nol niega!».</p>

        <p>Quali colombe dal disio chiamate<br/>
        con l’ali alzate e ferme al dolce nido<br/>
        vegnon per l’aere, dal voler portate;</p>

        <p>cotali uscir de la schiera ov’è Dido,<br/>
        a noi venendo per l’aere maligno,<br/>
        sì forte fu l’affettüoso grido.</p>

        <p>«O animal grazïoso e benigno<br/>
        che visitando vai per l’aere perso<br/>
        noi che tignemmo il mondo di sanguigno,</p>

        <p>se fosse amico il re de l’universo,<br/>
        noi pregheremmo lui de la tua pace,<br/>
        poi c’ hai pietà del nostro mal perverso.</p>

        <p>Di quel che udire e che parlar vi piace,<br/>
        noi udiremo e parleremo a voi,<br/>
        mentre che ’l vento, come fa, ci tace.</p>

        <p>Siede la terra dove nata fui<br/>
        su la marina dove ’l Po discende<br/>
        per aver pace co’ seguaci sui.</p>

        <p>Amor, ch’al cor gentil ratto s’apprende,<br/>
        prese costui de la bella persona<br/>
        che mi fu tolta; e ’l modo ancor m’offende.</p>

        <p>Amor, ch’a nullo amato amar perdona,<br/>
        mi prese del costui piacer sì forte,<br/>
        che, come vedi, ancor non m’abbandona.</p>

        <p>Amor condusse noi ad una morte.<br/>
        Caina attende chi a vita ci spense».<br/>
        Queste parole da lor ci fuor porte.</p>

        <p>Quand’io intesi quell’anime offense,<br/>
        china’ il viso, e tanto il tenni basso,<br/>
        fin che ’l poeta mi disse: «Che pense?».<br/>
        Quando rispuosi, cominciai: «Oh lasso,<br/>
        quanti dolci pensier, quanto disio<br/>
        menò costoro al doloroso passo!».</p>

        <p>Poi mi rivolsi a loro e parla’ io,<br/>
        e cominciai: «Francesca, i tuoi martìri<br/>
        a lagrimar mi fanno tristo e pio.</p>

        <p>Ma dimmi: al tempo d’i dolci sospiri,<br/>
        a che e come concedette amore<br/>
        che conosceste i dubbiosi disiri?».<br/>
        E quella a me: «Nessun maggior dolore<br/>
        che ricordarsi del tempo felice<br/>
        ne la miseria; e ciò sa ’l tuo dottore.</p>

        <p>Ma s’a conoscer la prima radice<br/>
        del nostro amor tu hai cotanto affetto,<br/>
        dirò come colui che piange e dice.</p>

        <p>Noi leggiavamo un giorno per diletto<br/>
        di Lancialotto come amor lo strinse;<br/>
        soli eravamo e sanza alcun sospetto.</p>

        <p>Per più fïate li occhi ci sospinse<br/>
        quella lettura, e scolorocci il viso;<br/>
        ma solo un punto fu quel che ci vinse.</p>

        <p>Quando leggemmo il disïato riso<br/>
        esser basciato da cotanto amante,<br/>
        questi, che mai da me non fia diviso,</p>

        <p>la bocca mi basciò tutto tremante.<br/>
        Galeotto fu ’l libro e chi lo scrisse:<br/>
        quel giorno più non vi leggemmo avante».</p>

        <p>Mentre che l’uno spirto questo disse,<br/>
        l’altro piangëa; sì che di pietade<br/>
        io venni men così com’io morisse.</p>

        <p>E caddi come corpo morto cade.</p>
      </div>
    </div>) : (  <div className="container-text-explanation">
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
        <button
        className="read-canto-button"
        onClick={() => setOpenCanto(true)}
      >
        📖 Leggi il Canto completo
    </button>
      </div>
)}
    
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