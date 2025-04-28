import './layout.css'

function Layout(props){
    console.log("hello");
    return(
            <main className="main-layout">
                {props.children}
            </main>
    );
}

export {Layout};