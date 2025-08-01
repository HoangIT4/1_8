import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth.js';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const { login } = useAuth();
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
      const success = await login(username, password);
      if (success) {
        navigate('/'); // Điều hướng về home
      } else {
        setError('Tên đăng nhập hoặc mật khẩu không đúng.');
      }
    } catch (err) {
      setError('Đã xảy ra lỗi khi đăng nhập.');
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateToRegister = () => {
    navigate('/register');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '0 auto' }}>
      <h2>Đăng nhập</h2>

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
        {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
      </button>
      <button
        type="button"
        onClick={handleNavigateToRegister}
        style={{
          width: '100%',
          background: 'transparent',
          color: 'blue',
          border: 'none',
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
      >
        Chưa có tài khoản? Đăng ký
      </button>
    </form>
  );
}
