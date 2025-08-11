import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth.js';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const { register } = useAuth(); // ⬅️ dùng register từ context
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const success = await register(username, password);
      if (success) {
        navigate('/'); // hoặc chuyển sang login nếu muốn
      } else {
        setError('Không thể đăng ký. Tên người dùng đã tồn tại?');
      }
    } catch (err) {
      setError('Đã xảy ra lỗi khi đăng ký.');
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateToLogin = () => {
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '0 auto' }}>
      <h2>Đăng ký</h2>

      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

      <input
        placeholder="Tên đăng nhập"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <input
        placeholder="Mật khẩu"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <button type="submit" disabled={loading} style={{ width: '100%' }}>
        {loading ? 'Đang đăng ký...' : 'Đăng ký'}
      </button>
      <button
        type="button"
        onClick={handleNavigateToLogin}
        style={{
          width: '100%',
          background: 'transparent',
          color: 'blue',
          border: 'none',
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
      >
        Đã có tài khoản? Đăng nhập
      </button>
    </form>
  );
}
