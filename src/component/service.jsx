// // import { React, Component } from 'react';
// // import {Col,Row,Form,Card} from 'react-bootstrap';
// // class Service extends Component {
// //   constructor(props) {
// //     super(props);
// //      }
// //   render() {
// //     return (
// //       <>
// //        <h1 className='text-center mt-3'>
// //         Service & Search Products</h1> 
// //         <Row>
// //           <Col xs={"12"} sm={"12"} md={"6"} lg={"6"} xl={"6"}>
          
// //           </Col>
// //         </Row>
// //       </>
// //     );
// //   }
// // }
// import React, { Component } from 'react';
// import {Button,Row,Col,Card} from 'react-bootstrap';
// import Pagination from 'react-bootstrap/Pagination';
// class Service extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: 1,Products:[]
//     };
//   }
//   componentDidMount() {
//     this.fetchProducts();
//   }
//   fetchProducts() {
//     fetch('https://dummyjson.com/products?limit=12')
//       .then(response => response.json())
//       .then(data => {
//         if (data !=undefined || data!= null)
//             {
//                 debugger;
//                 this.setState({ Products: data.products });
                
//             }
//         })
//     }
    


//   render() {
//     const { active } = this.state;
//     let items = [];

//     for (let number = 1; number <= 5; number++) {
//       items.push(
//         <Pagination.Item key={number} active={number === active}  onClick={() => this.handlePageClick(number)}>
//           {number}
//         </Pagination.Item>
//       );
//     }

//     return (
//       <div>
//         <Row>
//                         <Col className='ms-4'>
//                         <Row>
//                             {this.state.Products.length > 0 ? this.state.Products.map((item) => {

//                                 return (
                                    
//                                     <Col xs={"6"} sm={"6"} md={"6"} lg={"4"} className=" ms-0 mt-4" >
//                                            {/* <Card style={{ width: '25rem'}}> */}
//                                            <Card  className='product'>
//                                { <img  variant="top" className='imagebox' src={item.thumbnail} />}
//                                <Card.Body>
//                                    <Card.Title>{item.title}
//                                    </Card.Title>
//                                   <Card.Text className='text-truncate'>
//                                        {item.description}   
//                                    </Card.Text>
//                                    <h5 className='fs-6 mt-2'>Brand: <span>{item.brand}</span> </h5>
//                                    <h4 className='fs-6 mt-2 '>Price:<span className='price'> {item.price}</span> <span className='discount'> {item.discountPercentage} % OFF </span></h4>
//                                     <h6 className='fs-6'>Discount:<span className='discount'> {item.discountPercentage} % OFF </span>
//                                    </h6>
//                                     <Button className='btn-danger' onClick={()=>this.callfunction(item.id)}>Read More</Button>
//                                </Card.Body>
//                            </Card>
//                                     </Col>
                                  

//                                 )
//                             }):  <span> ....LOADING
                            
//                           </span>}
//                               </Row>
//                         </Col>
//                         </Row>
                            
//         <Pagination className="d-flex justify-content-center mt-3" size="sm">{items}</Pagination>
//       </div>
//     );
//   }
// }




// export default Service;

import React, { Component } from 'react';

class DataGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 10,
      Products:[]
    };
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
   
        handleClick = (event) => {
          this.setState({
            currentPage: Number(event.target.id),
          });
        };

  render() {
    const { data } = this.props;
    const { currentPage, itemsPerPage } = this.state;

    // Logic for displaying current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          style={{
            display: 'inline',
            padding: '8px',
            cursor: 'pointer',
            backgroundColor: currentPage === number ? '#ddd' : '#fff',
          }}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <h1>Data Grid</h1>
        <ul>
          {currentItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul id="page-numbers" style={{ listStyleType: 'none', padding: 0 }}>
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

// Example usage


export default function App() {
  return (
    <div>
      <DataGrid data={this.state.Products} />
    </div>
  );
}
