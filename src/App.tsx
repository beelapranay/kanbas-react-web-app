import React from 'react';
import Labs from './Labs';
import Kanbas from './Kanbas';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function App() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas currentUser={currentUser} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}