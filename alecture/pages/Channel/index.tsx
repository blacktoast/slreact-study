import Workspace from '@layouts/Workspace';
import { Workspaces } from '@layouts/Workspace/styles';
import React from 'react';
import { Container, Header } from './styles';

function Channel(props) {
  return (
    <Workspace>
      <Container>
        <Header>채널!</Header>
      </Container>
    </Workspace>
  );
}

export default Channel;
