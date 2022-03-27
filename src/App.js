import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => (
  <Container className="xxl">
  <Row></Row>
  <Row></Row>
  <Row>
  
    <Button variant="success" size="lg">Click ME!</Button>{''}
  
  </Row>
  </Container>
    

);

export default App;
