import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ImageGalleryContextProvider} from './context/imageGalleryContext'

ReactDOM.render(
  <ImageGalleryContextProvider>
    <App />
    </ImageGalleryContextProvider>
  ,
  document.getElementById('root')
);
