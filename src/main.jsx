import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//npm run  build
// build  >> create the folder(dist) that u upload on github pages when u dont have autobuild hoster
// creating .github/workflows/deploy.yml for autobuild
//Just remember to set base: "/<repo-name>/" in your vite.config.js before building