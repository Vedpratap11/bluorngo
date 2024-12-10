import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rout from './Route'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Rout/>
  </StrictMode>,
)
