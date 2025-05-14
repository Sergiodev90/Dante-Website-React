import './ContainerCantoExplain.css'
import { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import { CantoInferoI } from '../Canti/CantoInfernoI'
import { CantoInferoIII } from '../Canti/CantoInfernoIII'
import { CantoInferoV } from '../Canti/CantoInfernoV'
import { CantoPurgatorioI } from '../Canti/CantoPurgatorioI'
import { CantoPurgatorioIX } from '../Canti/CantoPurgatorioIX'
import { CantoPurgatorioXXXIII } from '../Canti/CantoPurgatorioXXXIII'
import { CantoParadisoI } from '../Canti/CantoParadisoI'
import { CantoParadisoXIII } from '../Canti/CantoParadisoXIII'
import { CantoParadisoXXXIII } from '../Canti/CantoParadisoXXXIII'

function ContainerCantoExplain(){
    const {index} = useContext(GlobalContext)
    const renderContent = () =>{
        switch(index){
            case 1:
                return(
                    <CantoInferoI/>
                );
            case 2:
                return(
                    <CantoInferoIII/>
                );
            case 3: 
                return(
                <CantoInferoV/>);
            case 4:
                return(
                    <CantoPurgatorioI/>
                );
            case 5:
                return(
                    <CantoPurgatorioIX/>
                );
            case 6:
                return(
                    <CantoPurgatorioXXXIII/>
                );
            case 7:
                return(
                    <CantoParadisoI/>
                );
            case 8:
                return(
                    <CantoParadisoXIII/>
                );
            case 9:
                return(
                    <CantoParadisoXXXIII/>
                );

        }
    }
    return(
        <>
            <div className='group'>
                {renderContent()}
            </div>
        </>
    )
}

export {ContainerCantoExplain}