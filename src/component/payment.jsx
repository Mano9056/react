import React, { Component } from 'react';
import { Button, Modal,Row,Col,Form } from 'react-bootstrap';
import img1 from '../img/sucsess.png';

class Payment extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    handleClose = () => {
        this.setState({ show: false });
      }
      handleShow = () => {
        this.setState({ show: true });
      };
    render(){
        return(
            <>
             <Button variant="warning" className="order" onClick={this.handleShow}>
          Order
        </Button>

        <Modal  backdrop="static" keyboard={false} show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Payment Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Row>
            <Col className='scan'>
         
            
            <img
              src={img1}              
              className=" qr d-inline-block align-top "
              alt="QR Code"
            />
            <h2 className='text-center mt-3 fs-5'>Amount :200</h2>
            <h2 className='text-center mt-3 fs-5'>Transaction Id: 47582244</h2>
            <Row>
              <Col>
              <h2 className='text-center mt-3 fs-5'>Token Id: 2</h2>
              </Col>
            </Row>
           
             
         
          </Col>
          </Row>
          </Modal.Body>
          <Modal.Footer>
            <Row>
            <Col className='ms-auto'>
            <Button variant="primary"  onClick={this.handleClose}>
              Close
            </Button>
            
            </Col>
            </Row>
          </Modal.Footer>
        </Modal>
            </>
        )

        
    }
}
export default Payment ;