import { React, Component } from 'react';
import { Col, Row, Table, Button, Form,Card, Container } from 'react-bootstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={ Products:[]}
    }
    componentDidMount() {
        this.fetchProducts();
      }
      fetchProducts() {
        fetch('https://dummyjson.com/products?limit=51')
          .then(response => response.json())
          .then(data => {
            if (data !=undefined || data!= null)
                {
                    debugger;
                    this.setState({ Products: data.products });
                    
                }
            })
        }
       
 
    render(){
    return (
        <>
     {/* <Col lg={"9"}>
     {this.state.Products.length > 0 ? this.state.Products.map((item) => {
                   
                   return (
                    <Container>
                    <Row>
                       <Col lg="6" className="mt-3 mb-3" >
                           <Card style={{ width: '25rem'}}>
                               { <Card.Img  variant="top" className='imagebox' src={item.thumbnail} />}
                               <Card.Body>
                                   <Card.Title>{item.title}
                                   </Card.Title>
                                  <Card.Text className='text-truncate'>
                                       {item.description}   
                                   </Card.Text>
                                   <h5 className='fs-6 mt-2'>Brand: <span>{item.brand}</span> </h5>
                                   <h4 className='fs-6 mt-2 '>Price:<span className='price'> {item.price}</span> <span className='discount'> {item.discountPercentage} % OFF </span></h4>
                                   {/* <h6 className='fs-6'>Discount:<span className='discount'> {item.discountPercentage} % OFF </span>
                                   </h6> */}
                                   {/* <Button className='btn-danger' onClick={()=>this.callfunction(item.id)}>Read More</Button>
                               </Card.Body>
                           </Card>
                       </Col>
                       </Row>
                       </Container>
                   )}

                   ) : <span>loading....</span> }
                //    </Col> */}
               
                      <Row>
                        <Col className='ms-4'>
                        <Row>
                            {this.state.Products.length > 0 ? this.state.Products.map((item) => {

                                return (
                                    
                                    <Col xs={"6"} sm={"6"} md={"6"} lg={"4"} className=" ms-0 mt-4" >
                                           {/* <Card style={{ width: '25rem'}}> */}
                                           <Card  className='product'>
                               { <img  variant="top" className='imagebox' src={item.thumbnail} />}
                               <Card.Body>
                                   <Card.Title>{item.title}
                                   </Card.Title>
                                  <Card.Text className='text-truncate'>
                                       {item.description}   
                                   </Card.Text>
                                   <h5 className='fs-6 mt-2'>Brand: <span>{item.brand}</span> </h5>
                                   <h4 className='fs-6 mt-2 '>Price:<span className='price'> {item.price}</span> <span className='discount'> {item.discountPercentage} % OFF </span></h4>
                                    <h6 className='fs-6'>Discount:<span className='discount'> {item.discountPercentage} % OFF </span>
                                   </h6>
                                    <Button className='btn-danger' onClick={()=>this.callfunction(item.id)}>Read More</Button>
                               </Card.Body>
                           </Card>
                                    </Col>
                                  

                                )
                            }):  <span> ....LOADING
                            Round Button
                          </span>}
                              </Row>
                        </Col>
                        </Row>
                        </>
    
    )
}
}

export default Contact