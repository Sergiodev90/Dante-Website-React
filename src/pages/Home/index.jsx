import { useState,useEffect,useContext} from "react";
import { Loader } from "../../components/UI/Loader";
import { Principal_container } from "../../components/Layout/principal-container";
import { Main_container } from "../../components/Layout/main-container";
import { First_section_container } from "../../components/Layout/first-section-container";
import  {Second_container} from "../../components/Layout/second-container"
import { Third_container } from "../../components/Layout/third-container";
import { Fourth_container } from "../../components/Layout/fourth-container";
import { Fifth_container } from "../../components/Layout/fifth-container";
import { GlobalContext } from "../../context/GlobalContext";
import { ContainerCantoExplain } from "../../components/UI/ContainerCantoExplain";
import { Modal } from "../../components/UI/Modal";
import { Footer } from "../../components/Layout/Footer";

function Home (){
    const [isStart,setIsStart] = useState(true);
    const {setOpenModal,openModal} = useContext(GlobalContext)
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
              <Main_container>
                <First_section_container/>
                <Second_container/>
                <Third_container/>
                <Fourth_container/>
                <Fifth_container/>
                <Footer/>
              </Main_container>
              {openModal && (<Modal setOpenModal={setOpenModal} openModal={openModal}>
                <ContainerCantoExplain/>
              </Modal>)}
              </>
          )}
        </>
      );

}


export  {Home};