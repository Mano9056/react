import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

import Cardb from '../card';



class Home extends Component {
    constructor(props) {
      super(props);
      this.state ={
       
  
      }
       
      };
     
    
    render(){
    return (
        <Container fluid>
           <Cardb/>
           
             </Container>  
    
    );
  }
  }
  
  export default withRouter (Home);

