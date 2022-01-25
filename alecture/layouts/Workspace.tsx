import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback } from 'react';
import useSWR from 'swr';

function Workspace({ children }) {
  const { data, error, mutate } = useSWR('/api/users', fetcher, { dedupingInterval: 1000000 });

  const onLogout = useCallback(() => {
    axios
      .post('api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate();
      });
  }, []);
  return (
    <div>
      <button onClick={onLogout}></button>
      {children}
    </div>
  );
}

export default Workspace;
