import { createRoot } from 'react-dom/client'
import './styles/index.css'
import {AppUI} from './AppUI.jsx';
createRoot(document.getElementById('root')).render(
    <AppUI />
)
