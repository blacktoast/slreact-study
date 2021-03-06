import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Error, Form, Header, Input, Label, LinkContainer, Success } from './styled';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { request } from 'http';
import fetcher from '@utils/fetcher';
import useSWR from 'swr';

function SignUp(props) {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher);

  const nav = useNavigate();

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangePassword = useCallback(
    (e) => {
      let flag = e.target.value === passwordCheck;
      setPassword(e.target.value);
      setMismatchError(flag);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      let flag = e.target.value === password;
      setPasswordCheck(e.target.value);
      setMismatchError(flag);
    },
    [password],
  );
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (mismatchError && nickname) {
        setSignUpSuccess(false);
        axios
          .post('/api/users', {
            email,
            nickname,
            password,
          })
          .then((reponse) => {
            setSignUpSuccess(true);
            console.log(reponse);
          })
          .catch((error) => {
            console.log(error.response);
            setSignUpError(error.response.data);
          });
      }
    },
    [email, nickname, password, passwordCheck],
  );

  if (data) {
    nav('/workspace/channel');
  }

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>????????? ??????</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>?????????</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>????????????</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>???????????? ??????</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {!mismatchError && <Error>??????????????? ???????????? ????????????.</Error>}
          {!nickname && <Error>???????????? ??????????????????.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>???????????????????????????! ?????????????????????.</Success>}
        </Label>
        <Button type="submit">????????????</Button>
      </Form>
      <LinkContainer>
        ?????? ???????????????????&nbsp;
        <Link to="/login">????????? ????????????</Link>
      </LinkContainer>
    </div>
  );
}

export default SignUp;
