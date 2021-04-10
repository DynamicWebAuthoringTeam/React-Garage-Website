import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <React.StrictMode>

    {/* CookiesProvider Provides access to cookies */}
    <CookiesProvider>
      {/* The App Component */}
      <App />
    </CookiesProvider>

  </React.StrictMode>,
    document.getElementById('root')
  );
