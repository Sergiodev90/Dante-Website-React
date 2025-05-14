import './SearchButton.css'
import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
function SearchButton(){
    const {openNavbar,setOpenNavbar} = useContext(GlobalContext);
    return   (
    <button className="search-button" onClick={()=>setOpenNavbar(!openNavbar)}>
      🔎
    </button>);
}

export {SearchButton};