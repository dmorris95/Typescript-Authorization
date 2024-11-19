import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import AuthorizationGuard from './AuthorizationGuard';
import HomePage from './HomePage';
import ProtectedPage from './ProtectedPage';


const App: React.FC = () => {
  return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/protected' element={<AuthorizationGuard element={<ProtectedPage />} />} />
      </Routes>
  );
}

export default App;
