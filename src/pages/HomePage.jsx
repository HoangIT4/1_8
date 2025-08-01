import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: 800, margin: '50px auto', textAlign: 'center' }}>
      <h1>Xin chào {user?.username || 'người dùng'} 👋</h1>
      <p>Chào mừng bạn đến với hệ thống quản lý.</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 40 }}>
        <button onClick={() => navigate('/products')}>📦 Quản lý sản phẩm</button>
        <button onClick={() => navigate('/users')}>👥 Quản lý người dùng</button>
        <button onClick={() => navigate('/customers')}>💼 Quản lý khách hàng</button>
      </div>

      <div style={{ marginTop: 40 }}>
        <button onClick={handleLogout} style={{ color: 'red' }}>
          Đăng xuất
        </button>
      </div>
    </div>
  );
}
