import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import LoginForm from './LoginForm';
import ManagerDashboard from './ManagerDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route element={<PrivateRoute />}>
          <Route path="/manager_dashboard" element={<ManagerDashboard />} />
        </Route>
        {/* <Route element={<PrivateRoute />}>
          <Route path="/user_dashboard" element={<UserDashboard />} />
        </Route> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
