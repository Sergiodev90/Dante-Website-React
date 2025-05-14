import { useRoutes, BrowserRouter} from 'react-router-dom'
import {BiographyDante}from '../BiographyDante'
import {Home} from '../Home'
import { CVDante } from '../CVDante'
import { NavBar } from '../../components/UI/Navbar'



const AppRoutes = () =>{
  
  
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: "/CVDante", element: <CVDante/>},
    { path: "/BiographyDante", element: <BiographyDante/>},
    // { path: "/DantePyramid", element: <Home/>},
  ]);
  return routes;
}



const App  = () => { 
  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
         <NavBar/>

      </BrowserRouter>

    </>
  )
}

export {App}