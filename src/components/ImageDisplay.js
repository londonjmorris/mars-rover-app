import React, { Component } from 'react';
import {Row, Col, Card} from 'react-materialize';

const ImageDisplay = (props) => {
  return (
  <Row>
    <Col s={4} className="display">
      <Card className="small current_rover" >{props.rover}
        <div className="cam_sol">{props.camera}</div>
      </Card>
    </Col>

  </Row>
  );
}
export default ImageDisplay;
