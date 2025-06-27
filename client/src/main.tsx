import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Developer credit
console.log("🇳🇬 NaijaTaxAssist - Built by Abdulrahman Adisa Amuda");
console.log("💚 Making tax reforms accessible to every Nigerian");
console.log("🔗 LinkedIn: https://www.linkedin.com/in/abdulrahman--engineering-ai-ml/");
console.log("🔗 GitHub: https://github.com/adisar6402");

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
