// App.jsx
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthProvider';
import { useAuth } from '@/hooks/useAuth.js';

import LoginPage from './pages/LoginPage';
import RegisterForm from '@components/RegisterPage.jsx';
import EditUser from '@components/User/EditUser.jsx';
import HomePage from '@pages/HomePage.jsx';

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterForm />} />

      {/* Protected */}
      {user ? (
        <>
          <Route path="/" element={<EditUser />} />
          {/* <Route path="/add-user" element={<AddUser />} /> */}
          {/* <Route path="/edit-user/:id" element={<EditUserPage />} /> */}
          {/* <Route path="/view-user/:id" element={<ViewUserPage />} /> */}
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
