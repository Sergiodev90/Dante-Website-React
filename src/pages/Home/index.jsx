import { useState,useEffect} from "react";
import { Loader } from "../../components/UI/Loader";
import { Principal_container } from "../../components/Layout/principal-container";

function Home (){
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        
        const timeout = setTimeout(() => {
          setLoading(false);
        }, 3000); 
    
        return () => clearTimeout(timeout);
      }, []);
    return(
        <>
        {loading ? <Loader/> :(
            <Principal_container/>
        )}
        </>
    );

}


export  {Home};