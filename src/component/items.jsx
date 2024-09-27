// import React, { Component } from "react";
// import { Col, Row, Card, Button, Carousel, Container ,Form} from 'react-bootstrap';

// class Shop extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Products: {}
//         }
//     }
//     componentDidMount() {
//         let id = this.props.match.params.id;
//         fetch('https://dummyjson.com/products/' + id)
//             .then(response => response.json())
//             .then(data => {

//                 {
//                     this.setState({ Products: data });
//                     console.log(this.state.Products);


//                 }

//             })
//     }
//  render(){
//     <>
//     <h1>Items</h1></>
//  }   
// }
// export default Shop;

import React, { Component } from 'react';

class DataGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 5,
    };
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
const data = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10',
  'Item 11',
  'Item 12',
];

export default function App() {
  return (
    <div>
      <DataGrid data={data} />
    </div>
  );
}
