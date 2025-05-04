import { useState,useEffect} from "react";
import { Loader } from "../../components/UI/Loader";
import { Principal_container } from "../../components/Layout/principal-container";
import { Main_container } from "../../components/Layout/main-container";
import { First_section_container } from "../../components/Layout/first-section-container";

function Home (){
    const [isStart,setIsStart] = useState(true);

    useEffect(() => {
        
        const timeout = setTimeout(() => {
          setIsStart(false);
        }, 7000); 
    
        return () => clearTimeout(timeout);
      }, []);
      return (
        <>
          {isStart ? (
            <Loader isStarting={isStart} />
          ) : (
            <>
              <Principal_container />
              <First_section_container/>
              </>
          )}
        </>
      );

}


export  {Home};