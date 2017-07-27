import React, { Component } from 'react';
import {Row, Col, Card} from 'react-materialize';

const ImageCard = (props) => {
  return (
  <Row>
    <Col s={4} className="display">
      <Card>
        <img src={props.image.img_src}/>
      </Card>
    </Col>

  </Row>
  );
}
export default ImageCard;
