import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import QueComemosApp from './components/QueComemosApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueComemosApp/>
  </StrictMode>,
)
