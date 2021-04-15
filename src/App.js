import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Myquiz from './Myquiz'
import {Container} from "react-bootstrap"



function App() {
  return (
    <Container>
    <div >
     <Myquiz/>
    </div>
    </Container>
  );
}

export default App;
