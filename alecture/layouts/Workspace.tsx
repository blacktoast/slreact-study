import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

function Workspace({ children }) {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher);
  const nav = useNavigate();

  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false);
      });
  }, []);

  if (!data) {
    console.log('test ' + data);
    nav('/login');
  }
  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  );
}

export default Workspace;
