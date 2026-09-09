import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//forms
import Forms from './forms'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Forms/>
  </StrictMode>,
)