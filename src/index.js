import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/scss/index.scss';
import Header from './components/Header/index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile/index';
import Error from './pages/Error'
import Home from './pages/Home/index'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
