import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

// Some comment
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor='green'>
      <App />
    </Theme>
  </StrictMode>,
)
