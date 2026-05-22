import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@radix-ui/themes/styles.css"
import { Theme } from '@radix-ui/themes'

// some comment for project-b (3)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor='violet'>
      <App />
    </Theme>
  </StrictMode>,
)
