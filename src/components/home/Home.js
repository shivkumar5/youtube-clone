import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryNav from '../category/CategoryNav';
import VideoItem from '../videoItem/VideoItem';
import './home.scss';

const Home = () => {
  return (
    <Container>
      <CategoryNav/>
      <Row>
       {
         [...new Array(20)].map((item) => {
           return (
              <>
                <Col md={3}
                  lg={4}>
                  <VideoItem/>
                </Col>
              </>
           );
         })
       }
      </Row>
    </Container>
  );
};

export default Home;
