import Workspace from '@layouts/Workspace';
import { Workspaces } from '@layouts/Workspace/styles';
import fetcher from '@utils/fetcher';
import React from 'react';
import useSWR from 'swr';
import { Container, Header } from './styles';

function Channel(props) {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher);
  console.log('hi 여기는 채널 컴포넌트 ' + data);
  return (
    <Workspace>
      <Container>
        <Header>채널!</Header>
      </Container>
    </Workspace>
  );
}

export default Channel;
