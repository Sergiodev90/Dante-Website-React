import './main-container.css'

function Main_container({children}){
    return(
        <section className="main-container-presentation">
            {children}
        </section>
    );
}

export {Main_container}