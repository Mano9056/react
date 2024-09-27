import React, { Component } from 'react';
import { Button, Modal,Row,Col,Form } from 'react-bootstrap';
import img1 from '../img/qr-code-for-scanning-free-vector.jpg';
import img2 from '../img/sucsess.png';


class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {name:'' ,
      show: false
      }
  }
  handleClose = () => {
    this.setState({ show: false });
  }
  handleShow = () => {
    this.setState({ show: true});
  };
  handleClick = () => {
    if (this.state.name.trim() === '') {
      this.setState({ errors: true });
    } else {
      this.setState({ isActive: true, errors: false });
    }
  };
  change = (e) => {
    debugger;       
    this.setState({name:e.target.value, errors:false})
}

  render() {
    return (
      <>
      
        <Button variant="warning" className="order" onClick={this.handleShow}>
          Order
        </Button>
        
        <Modal  backdrop="static" keyboard={false} show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Payment Way</Modal.Title>
          </Modal.Header>
         
          <Modal.Body>
         
          <Row>
            <Col className='scan'>
         
            {!this.state.isActive ? (
              <>
            <img
              src={img1}              
              className=" qr d-inline-block align-top "
              alt="QR Code"
            />
             <h2 className='text-center mt-2 fw-bold fs-6'>Scan & Get your Order</h2>
            <h2 className='text-center mt-3 fs-5'>Amount : <span> 1150 </span></h2>
            <Row>
              <Col>
              <Form.Label className='mt-3'>Transaction ID:</Form.Label>
              <Form.Control className='transaction ms-2' type="text" name='control'onChange={(e)=>this.change(e)}/>
              {this.state.errors && <h2 className='fw-light fs-5 mt-2'><span className='text-danger ms-5'>Transaction ID is required.</span></h2>}
              </Col>
            </Row> 
            </>
            
            ):( 
         
        <>
           <Col>
            <img
              src={img2}              
              className=" qr d-inline-block align-top "
              alt="QR Code"
            />
            <h2 className='text-center mt-3 fs-5'>Amount :1150</h2>
            <h2 className='text-center mt-3 fs-5'>Transaction Id: {this.state.name}</h2>
            <Row>
              <Col>
              <h2 className='text-center mt-3 fs-5'>Token Id: 1</h2>
              </Col>
            </Row>
            </Col> 
            </>
            )}
             
         
          
          
          
            
          
            <Col>
            <Button variant="primary" className='close mt-4'  onClick={this.handleClose}>
              Close
            </Button>
           
            <Button variant="primary" className='submit ms-2 mt-4'  onClick={this.handleClick}>
              Sumbit
            </Button>
            </Col> 
          </Col>
          </Row>
            
           
          
              
          </Modal.Body>
        </Modal>
        </>
        
     
    );
  }
}

export default Alert;



















