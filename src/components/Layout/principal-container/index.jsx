import './principal-container.css'

function Principal_container(){
    const srcVideoBackgroundPrincipal =  "https://www.binamic.it/sergio_script/my_files/output.mp4"

    return(
        <>
            <section className='principal-container-presentation'>
                
                <video src={srcVideoBackgroundPrincipal} autoPlay loop muted></video>
                <div className='container-title-principal-presentation'>
                    <h1>LA DIVINA COMEDIA</h1>
                </div>
            </section>
        </>
    );
}

export {Principal_container}