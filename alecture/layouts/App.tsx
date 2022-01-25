import React from 'react';
import { Navigate, Route, Router } from 'react-router';
import { Routes } from 'react-router';
import loadable from '@loadable/component';

const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Channel = loadable(() => import('@pages/Channel'));

function App(_props: any) {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />

      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="workspace" element={<Channel />} />
    </Routes>
  );
}

export default App;
