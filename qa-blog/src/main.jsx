import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorBoundary } from './ErrorBoundary.jsx'

const root = document.getElementById('root')
if (!root) {
  document.body.innerHTML = '<div style="padding:20px;font-family:sans-serif;background:#0a0a0f;color:#fff;min-height:100vh">No root element found. Check index.html.</div>'
} else {
  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  )
}
