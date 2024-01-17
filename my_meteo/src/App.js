import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import ViewPage from './pages/ViewPage';
import { Container } from 'react-bootstrap';
import ErrorPage from './pages/ErrorPage';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">MY_METEO</span>
  </div>
</nav>
<div className="text-center h1 py-5 jumbotron bg-primary">Che tempo farà nella tua città?<br/>Scoprilo con MY_METEO</div>
        <Container>
          <Routes>
            <Route element={<SearchPage/>} path="/"></Route>
            <Route element={<ViewPage/>} path="/:city"></Route>
            <Route element={<ErrorPage/>} path="*"></Route>
          </Routes>
        </Container>
        <footer className='bg-primary p-5 fixed-bottom'>
          <div className="text-center">My_Meteo &copy; 2024 All rights reserved</div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
