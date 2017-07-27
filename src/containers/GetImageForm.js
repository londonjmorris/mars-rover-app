import React, { Component } from 'react';
import { Row, Input, option } from 'react-materialize';

import GetImageButton from './../components/GetImageButton';
import ImageDisplay from './../components/ImageDisplay';
import ImageCard from './../components/ImageCard';

const API_KEY = "Dhaa6OK9p6Pcup85029BWfNZ1BpE8uNECZ2qoPmG";

export default class GetImageForm extends Component {
  constructor(props){
    super(props);

    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);
    this.fetchRoverImage = this.fetchRoverImage.bind(this);

    this.state = {
      rover: "select a rover",
      camera: " & camera",
      images: [],
      sol: "",
    }
  }

  handleRover(e){
    e.preventDefault();
    this.setState({
      rover: e.target.value
    });
  }

  handleCamera(e){
    e.preventDefault();
    this.setState({
      camera: e.target.value
    });
  }

  handleSol(e){
    e.preventDefault();
    this.setState({
      sol: e.target.value
    });
  }

  fetchRoverImage(props){
    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;
    fetch(imageUrl)
    .then(results => results.json())
    .then(responseData => {
      console.log('results', responseData);
      this.setState({images: responseData.photos});
    })
    .catch((error) => {
      console.log("Error with Fetching : ", error);
    });
  }

  render(){

    let images = this.state.images.map((image, index) => {
      return <ImageCard key={index} image={image} />
    })

    return(
      <div className="base">
        <div className="form">
          <Row>
              <Input s={4} type='select' label="Rover" onChange={this.handleRover} id="rover" value={this.state.value}>
                <option value="">Select A Rover</option>
                <option value="Curiosity">Curiosity</option>
                <option value="Opportunity">Opportunity</option>
                <option value="Spirit">Spirit</option>
              </Input>
              <Input s={4} type='select' label="Camera" onChange={this.handleCamera} id="rover" value={this.state.value}>
                <option value="">Select A Camera</option>
                <option value="fhaz">FHAZ (Front Hazard)</option>
                <option value="rhaz">RHAZ (Rear Hazard)</option>
                <option value="navcam">NAVCAM (Navigation Cam)</option>
              </Input>
              <Input s={4} type="number" label="Martian Sol: 1000-2000" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
          </Row>
        </div>
        <GetImageButton onClick={this.fetchRoverImage} />
        <ImageDisplay rover={this.state.rover} camera={this.state.camera} sol={this.state.sol}/>
        {images}
      </div>
    )
  }
}
