import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MoviesList from './MoviesList';
import Header from './Header';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <MoviesList />
  </React.StrictMode>
);
