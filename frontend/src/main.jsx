import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvidor } from './components/backend/context/Auth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvidor>
    <App />
    </AuthProvidor>
  </StrictMode>,
)
