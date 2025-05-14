import './fourth_container.css'

function Fourth_container(){
    return(
    <section className="fourth-container-presentation">
                <div className="container-fourth">
                    <div className="container-info-fourth">
                        <h1 className='title-fourth'>
                        QUAL ERA LA MISSIONE DI DANTE AL MOMENTO DI SCRIVERE LA DIVINA COMMEDIA?
                        </h1>
                        <p>
                            L'opera di Dante Alighieri, "La Divina Commedia", ha una missione profondamente esoterica: guidare le anime cadute verso la loro redenzione e l'auto-realizzazione intima dell'Essere. Dante non scrisse semplicemente un'opera letteraria: il suo viaggio attraverso l'Inferno, il Purgatorio e il Paradiso è una mappa simbolica del processo di Iniziazione che deve affrontare chiunque aneli al risveglio della coscienza e all'unione con il divino interiore.
                        </p>
                        <ul>
                            <li>Mostrare il cammino della purificazione dell’anima attraverso le prove e le sofferenze (Inferno).</li>
                            <li>Illustrare la necessità della morte psicologica, cioè l’eliminazione dell’Ego attraverso il lavoro interiore (Purgatorio).</li>
                            <li>Indicare la meta sublime dell’unione mistica con Dio, la realizzazione piena dell’Essere (Paradiso).</li>

                        </ul>
                    </div>
                    <div className='container-image'>
                    <div className="container">
                        <div className="book">
                            <div className="front">
                                <div className="cover">
                                <img src='/src/assets/images/morte_pscicologica.jpeg' />                            
                                </div>
                            </div>
                            <div className="left-side">
                                <h2>
                                    <span></span>
                                    <span></span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </section>
    )
}

export {Fourth_container}