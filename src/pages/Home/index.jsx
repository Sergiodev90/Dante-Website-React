import { useState,useEffect} from "react";
import { Loader } from "../../components/UI/Loader";
import { Principal_container } from "../../components/Layout/principal-container";

function Home (){
    const [isStart,setIsStart] = useState(true);

    useEffect(() => {
        
        const timeout = setTimeout(() => {
          setIsStart(false);
        }, 4000); 
    
        return () => clearTimeout(timeout);
      }, []);
    return(
        <>
        {isStart ? <Loader isStarting={isStart}/> :(
            <Principal_container/>
        )}

        </>
    );

}


export  {Home};