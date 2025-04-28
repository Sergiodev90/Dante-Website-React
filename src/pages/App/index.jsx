import { useRoutes, BrowserRouter} from 'react-router-dom'
import { Home } from '../Home'
import { NavBar } from '../../Components/Navbar'
import { NavItem } from '../../components/NavItem'
import './App.css'



const AppRoutes = () =>{
  
  
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: "/CVDante", element: <Home/>},
    { path: "/BiographyDante", element: <Home/>},
    { path: "/DantePyramid", element: <Home/>},
  ]);


  return routes;
}



const App  = () => { 


  return (
    <>
      <BrowserRouter>

        <AppRoutes/>
        <NAVBU
      </BrowserRouter>

    </>
  )
}

export {App}