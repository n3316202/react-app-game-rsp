import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const rspToString = (rsp) => {
  if (rsp == 0) return '가위';
  else if (rsp == 1) return '바위';
  else return '보';
};

const stringToRsp = (str) => {
  if (str === '가위') return 0;
  else if (str === '바위') return 1;
  else return 2;
};

const resultString = (com_rsp, your_rsp) => {
  let result = '비겼습니다';

  if (com_rsp === your_rsp) {
    return (result = '비겼습니다');
  }

  if (com_rsp == 0) {
    if (your_rsp == 1) result = '당신이 이겼습니다.';

    if (your_rsp == 2) result = '당신이 졌습니다.';
  }

  if (com_rsp == 1) {
    if (your_rsp == 0) result = '당신이 졌습니다.';

    if (your_rsp == 2) result = '당신이 이겼습니다.';
  }

  if (com_rsp == 2) {
    if (your_rsp == 1) result = '당신이 졌습니다.';

    if (your_rsp == 2) result = '당신이 이겼습니다.';
  }

  return result;
};

const ContentResult = () => {
  let params = useParams();
  let result;

  console.log(params.rsp);

  let com_rsp = Math.floor(Math.random() * 2);
  let your_rsp = stringToRsp(params.rsp);

  result = resultString(com_rsp, your_rsp);
  console.log(resultString(com_rsp, your_rsp));

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://taegon.kim/wp-content/uploads/2018/05/image-5.png"
            />
            <Card.Body>
              <Card.Title>당신</Card.Title>
              <Button variant="primary" value="가위">
                {params.rsp}
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://taegon.kim/wp-content/uploads/2018/05/image-5.png"
            />
            <Card.Body>
              <Card.Title>컴퓨터</Card.Title>
              <Button variant="primary" value="보">
                {rspToString(com_rsp)}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="mt-5">
        <h1>{result}</h1>
        <Button variant="primary" value="보">
          <StyledLink to={`/`}>한번더</StyledLink>
        </Button>
      </div>
    </div>
  );
};

export default ContentResult;
