import React, {  useEffect, useState } from 'react';

const GlobalContext = React.createContext();

function GlobalProvider({children}){
    const [openModal, setOpenModal] = useState(false);
    const [index, setIndex] = useState(0);
    const passInfo= (index) =>{
        setIndex(index)
    }

    return(
        <GlobalContext.Provider value={{
            openModal,
            setOpenModal,
            passInfo,
            index
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export {GlobalContext,GlobalProvider}