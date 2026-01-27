import { createRoot } from 'react-dom/client'
import SidebarProvider from './context/SidebarProvider.tsx' 
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </BrowserRouter>
)
