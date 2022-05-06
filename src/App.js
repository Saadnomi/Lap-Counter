import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Component } from 'react';


class numClicks extends Component{
  state = {
    numberClicks: 0
  };

  render(){
    return(
      <Container className="container-fluid">
    <style type="text/css">
  {`
    .btn-huge {
      padding: 3rem 5rem;
      font-size: 4rem;
    }
  `}
  </style>
  <Row>
    <Card className='text-center'>
      <Card.Body>
        <Card.Title>{this.state.numberClicks}</Card.Title>
      </Card.Body>
    </Card>
  </Row>
  <Row className="position-absolute top-50 start-50 translate-middle">
  
    <Button variant="success" size="huge" block onClick={this.updateCount}>Click ME!</Button>{''}
    <Button variant="primary" size="small" block onClick={this.reset}>Reset</Button>{''}
  
  </Row>
  </Container>
    )
  }
  updateCount = () => {
    var click = this.state.numberClicks
    this.setState({numberClicks: click+1});
  }

  reset = () => {
    this.setState({numberClicks: 0});
  }
}


 

export default numClicks;
