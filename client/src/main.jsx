//React DOM//
import { createRoot } from 'react-dom/client'
//Root css//
import "@/styles/root.css";

//Components//
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)
