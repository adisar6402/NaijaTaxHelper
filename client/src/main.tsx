import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Log developer name to console
console.log('NaijaTaxAssist - Built by Abdulrahman Adisa Amuda 🇳🇬');

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
