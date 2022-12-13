import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import coinsreducer from './components/Features/CoinsStats'
import newsreducer from './components/Features/NewsState'
import themereducer from './components/Features/Theme'
import 'react-alice-carousel/lib/alice-carousel.css';

const store = configureStore({
  reducer:{
    coins: coinsreducer,
    news: newsreducer,
    theme:themereducer,
  },
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


