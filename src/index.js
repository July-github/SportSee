import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import Header from './components/Header/index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import User from './pages/User/index';
import Error from './pages/Error'
import Home from './pages/Home/index'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/user/:userId/activity" element={<User />} />
        <Route path="/user/:userId/average-sessions" element={<User />} />
        <Route path="/user/:userId/today-score" element={<User />} />
        <Route path="/user/:userId/activities" element={<User />} />
        <Route path="/user/:userId/key-data" element={<User />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
