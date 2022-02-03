import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import App from './../App';
import ContentResult from './ContentResult';
import { Link, Outlet } from 'react-router-dom';

const Content = () => {
  const onClickRSP = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://taegon.kim/wp-content/uploads/2018/05/image-5.png"
            />
            <Card.Body>
              <Card.Title>가위</Card.Title>
              <Button variant="primary" value="가위">
                <Link style={{ color: 'white' }} to={`/result/${'가위'}`}>
                  가위
                </Link>
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
              <Card.Title>바위</Card.Title>
              <Button variant="primary" value="바위">
                <Link style={{ color: 'white' }} to={`/result/${'바위'}`}>
                  바위
                </Link>
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
              <Card.Title>보</Card.Title>
              <Button variant="primary" value="보">
                <Link style={{ color: 'white' }} to={`/result/${'보'}`}>
                  보
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
