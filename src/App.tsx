import React from 'react';
import Labs from './Labs';
import Kanbas from './Kanbas';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Profile from './Kanbas/Account/Profile';
import Signup from './Kanbas/Account/Signup';

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
