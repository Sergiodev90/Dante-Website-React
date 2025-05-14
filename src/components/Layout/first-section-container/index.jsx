import './first-section-container.css'

function First_section_container(){
    return(
<section className="first-container-presentation">
            <div className="container-first">
                <div className="container-info">
                    <h1 className='title-dante'>
                    Conosci il viaggio che ha cambiato la letteratura per sempre
                    </h1>
                    <p>
                    La Divina Commedia è una delle opere letterarie più influenti della storia, scritta da Dante Alighieri nel XIV secolo. Quest’opera monumentale narra il viaggio dello stesso Dante attraverso tre regni: l’Inferno, il Purgatorio e il Paradiso, rappresentando allegoricamente il cammino dell’anima umana dal peccato alla redenzione. Ciò che la rende un’opera ancora più affascinante non è solo la sua brillantezza letteraria, ma anche il profondo simbolismo esoterico racchiuso nelle sue pagine.
                    </p>
                </div>
                <div className='container-image'>
                <div className="container">
                    <div className="book">
                        <div className="front">
                            <div className="cover">
                            <img src='https://th.bing.com/th/id/R.63cf0d16233d01064f11a2c71587389f?rik=xVbMRaG1quzZDw&riu=http%3a%2f%2fwww.libreriamedievale.com%2fsites%2fdefault%2ffiles%2fcopertine%2fdivina_commedia_9788820302092.jpg&ehk=HLJ%2fXqcC8yrUTMXUdPqyN9b66mmHHQR3xdWy2DvENCs%3d&risl=&pid=ImgRaw&r=0' />                            
                            </div>
                        </div>
                        <div className="left-side">
                            <h2>
                                <span>Dante Alighieri</span>
                                <span>1321</span>
                            </h2>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </section>
    );
}

export {First_section_container};