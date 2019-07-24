import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Amatic SC:300,400,700', 'cursive', 'Satisfy', 'Kalam', 'Alfa Slab One', 'Oswald']
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
