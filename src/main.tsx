import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ================= GLOBAL BASE URL INTERCEPTOR =================
// यह सिस्टम .env से Base URL उठाकर पूरे प्रोजेक्ट की सारी API और Images पर अपने-आप लगा देता है
const BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

if (BASE_URL) {
  const originalFetch = window.fetch;
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    let url = input;

    // 1. अगर रिक्वेस्ट /api या /uploads से शुरू हो रही है, तो आगे Base URL जोड़ दो
    if (typeof input === 'string') {
      if (input.startsWith('/api') || input.startsWith('/uploads')) {
        url = `${BASE_URL}${input}`;
      }
    }

    const response = await originalFetch(url, init);

    // 2. बैकएंड से आने वाली फ़ोटो (imageUrl) के आगे भी Base URL अपने-आप जोड़ दो
    const originalJson = response.json.bind(response);
    response.json = async () => {
      const data = await originalJson();
      const attachBaseUrl = (obj: any): any => {
        if (!obj || typeof obj !== 'object') return obj;
        for (const key in obj) {
          if (typeof obj[key] === 'string' && obj[key].startsWith('/uploads/')) {
            obj[key] = `${BASE_URL}${obj[key]}`;
          } else if (typeof obj[key] === 'object') {
            attachBaseUrl(obj[key]);
          }
        }
        return obj;
      };
      return attachBaseUrl(data);
    };

    return response;
  };
}
// ===============================================================

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);