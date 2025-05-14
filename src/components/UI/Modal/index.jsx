import React from "react";
import ReactDom from "react-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import "./Modal.css";


function Modal({children}){
    const {setOpenModal} = useContext(GlobalContext)
    return ReactDom.createPortal(        

            <div className="Modal">
                <div className="ModalBackground" onClick={()=>setOpenModal(false)}></div>
              { children}
            </div>,

        document.getElementById('modal')
    );

}

export {Modal}