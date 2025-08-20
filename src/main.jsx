import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WeatherContextProvider from './contexts/WeatherContext.jsx'

createRoot(document.getElementById('root')).render(
  <WeatherContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </WeatherContextProvider>
)

