import React, { useEffect, useState } from 'react';
import { getUser } from '@/Apis/UserAPI.js';

export default function EditUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.role} - {user.department}
          </li>
        ))}
      </ul>
    </div>
  );
}
