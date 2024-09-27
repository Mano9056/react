import { React, Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import Alert from './modal';



class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state={name:'',Cardd:[],total:''}
  }
  



 render() {
    
    return (
      <div className="sidebar p-3 mt-4">
        <h2 className='text-center'>Bill</h2>
          
         {
         this.props.Cardd.length > 0 && this.props.Cardd.map((item) => {
          debugger;
          return(<>
                <h5 className='fw-bold fs-6 ps-3 mt-2'> <span>{item.food}</span></h5> 
                <h5 className='fw-light fs-6  ps-3 mt-2'>Price  <span>:{item.price}</span></h5> 
                <h5 className='fw-light fs-6  ps-3 mt-2'>Count : <span> <Form.Control type="number" name='count' value={item.Qty} onChange={(e)=>this.props.handleChange(e,item.id,item.price)} className='count' /> </span></h5>        
                <h5 className='fw-light fs-6 mt-1 ps-3'>TotalPrice: <span>{item.TPrice} </span><Button onClick={()=> this.props.handleRemove(item.id)} className=" ico fs-6 pb-0 pt-0 ms-0 me-0">DEL</Button> </h5>
                <hr />
        </>
          )} )}
      <>
      <h3 className='fw-light fs-6 ps-3 mt-2'>Total Amount: <span className=' fs-6'>{this.props.total}</span> </h3>
      <hr />
      <Alert {...this.state} />
      </>    
     
         
       
            </div>
    );
  }
}
export default Sidebar;