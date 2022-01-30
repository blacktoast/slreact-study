import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import loadable from '@loadable/component';
import Workspace from './Workspace';

const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));

function App(_props: any) {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/workspace/channel" element={<Channel />}></Route>
      <Route path="/workspace/dm" element={<DirectMessage />} />
    </Routes>
  );
}

export default App;
