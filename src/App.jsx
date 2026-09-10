import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// css
import './index.css'

// forms
import Form from './form'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form/>
  </StrictMode>,
)