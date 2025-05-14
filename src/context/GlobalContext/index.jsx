import React, {  useEffect, useState } from 'react';

const GlobalContext = React.createContext();

function GlobalProvider({children}){
    const [openModal, setOpenModal] = useState(false);
    const [index, setIndex] = useState(0);
    const [openNavbar,setOpenNavbar] = useState(false);
    const passInfo= (index) =>{
        setIndex(index)
    }

    return(
        <GlobalContext.Provider value={{
            openModal,
            setOpenModal,
            passInfo,
            index,
            openNavbar,
            setOpenNavbar
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export {GlobalContext,GlobalProvider}