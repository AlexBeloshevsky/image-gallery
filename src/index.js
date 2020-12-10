import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ImageGalleryContextProvider} from './context/imageGalleryContext';
import {GlobalStyles} from './global-styles';

ReactDOM.render(
  <ImageGalleryContextProvider>
    <GlobalStyles/>
    <App />
  </ImageGalleryContextProvider>
  ,
  document.getElementById('root')
);
