import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';

const GetImageButton = (props) => {
  return(
    <Button onClick={props.onClick} waves='light' className="red" >Get Rover Image</Button>
  );
}


export default GetImageButton;
