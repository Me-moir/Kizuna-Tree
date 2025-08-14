// Install react-router-dom first:
// npm install react-router-dom

// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Redirect root to TNK-linktree */}
        <Route path="/" element={<Navigate to="/TNK-linktree" replace />} />
        
        {/* Your linktree page */}
        <Route path="/TNK-linktree" element={<App />} />
        
        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/TNK-linktree" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)