import "./third_container.css"
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
function Third_container() {
    const {setOpenModal,passInfo} = useContext(GlobalContext);
    return (
        <section className="third-section-container">
            <div className="container-third">
                <h2>CAPITOLI IMPORTANTI DELLA DIVINA COMMEDIA</h2>

                <div className="container-titles-canti">
                    <div className="container-article">
                        <h3>Inferno</h3>
                        <div className="container-canti">
                            <div onClick={()=>{setOpenModal(true);passInfo(1)}}>
                                <h3>CANTO I</h3>
                                <p>LA SELVA OSCURA</p>
                            </div>
                            <div onClick={()=>{setOpenModal(true);passInfo(2)}}>
                                <h3>CANTO III</h3>
                                <p>LA PORTA DELL'INFERNO E GLI IGNAVI</p>
                            </div>
                            <div onClick={()=>{setOpenModal(true);passInfo(3)}}>
                                <h3>CANTO V</h3>
                                <p>I LUSSURIOSI</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-article">
                        <h3>Purgatorio</h3>
                        <div className="container-canti">
                            <div onClick={()=>{setOpenModal(true);passInfo(4)}}>
                            <h3>CANTO I</h3>
                            <p>L'INZIO DELLA SALITA DEL PURGATORIO</p>
                            </div>
                            <div onClick={()=>{setOpenModal(true);passInfo(5)}}>
                            <h3>CANTO IX</h3>
                            <p>IL SOGNO E L'INGRESSO NEL PURGATORIO</p>
                            </div>
                            <div onClick={()=>{setOpenModal(true);passInfo(6)}}>
                            <h3>CANTO XXXIII</h3>
                            <p>LA VISIONE MISTICA E LA FINE DEL PURGATORIO</p></div>
                        </div>
                    </div>
                    <div className="container-article">
                        <h3>Paradiso</h3>
                        <div className="container-canti">
                            <div onClick={()=>{setOpenModal(true);passInfo(7)}}>
                            <h3>CANTO I</h3>
                            <p>L'ELEVAZIONE ALL'EMPIREO</p>
                            </div>
                            <div onClick={()=>{setOpenModal(true);passInfo(8)}}><h3>CANTO XIII</h3>
                            <p>LA SAPIENZA DIVINA E SALOMONE</p></div>
                            <div onClick={()=>{setOpenModal(true);passInfo(9)}}><h3>CANTO XXXIII</h3>
                            <p>LA VISIONE FINALE DI DIO</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Third_container }
