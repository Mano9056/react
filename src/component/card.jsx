import { Component } from 'react';
import { Col, Row, Button, Card, Badge } from 'react-bootstrap';
import styled from 'styled-components';
import Sidebar from './sidebar';

import _ from 'lodash';

const card = [{
    id: '1',
    img1: "http://localhost:3000/img/Chicken Briyani.jpg",
    food: " OTTO",
    price:  "$250",
    count: 450,

},
{
    id: '2',
    img1: "http://localhost:3000/img/Chicken Briyani.jpg",
    food: "Allen Solly",
    price: 300,
    count: 580
},
{
    id: '3',
    img1: "http://localhost:3000/img/Chicken Briyani.jpg",
    food: "Adiddas",
    price: 100,
    count: 615
},
{
    id: '4',
    img1: "http://localhost:3000/img/Chicken Briyani.jpg",
    food: " Volume Zero",
    price: 250,
    count: 50
},
{
    id: '5',
    img1: "http://localhost:3000/img/Chicken Briyani.jpg",
    food: "Peter England",
    price: 180,
    count: 500
},
{
    id: '6',
    img1: "http://localhost:3000/img/Chicken Briyani 1.jpg",
    food: "Puma",
    price: 100,
    count: 200
}
]




class Cardb extends Component {
    constructor(props) {
        super(props);
        this.state = { Cardbox: card, Cardd: [], total: 0 }
    }
    componentDidMount() {
        const str = localStorage.getItem('array')
        const parsedArray = JSON.parse(str)
        this.setState({ Cardbox: parsedArray })
        console.log(this.state.Cardbox);

    }

    handleClick = (id, name, price) => {
        debugger;
        let items = [];
        let obj = {
            id: id,
            name: name,
            price: price,
            TPrice: price,
            Qty: 1

        };
        if (this.state.Cardd.length > 0) {
            items = this.state.Cardd;
            items.push(obj);

        } else {
            items.push(obj);
        }

        this.setState({ Cardd: items, total: this.state.total + (price * 1) }, () => { this.Save() })
        //this.state.Cardd.push({"id":id,"name":name,"price":price})
        console.log(this.state.Cardd)
    };


    handleChange = (e, id, price) => {
        debugger;
        let update = []
        let totalP = 0;
        if (this.state.Cardd.length > 0) {
            update = this.state.Cardd.map(item => item.id == id ? { ...item, TPrice: (price * e.target.value), Qty: e.target.value } : item);
            totalP = _.sumBy(update, 'TPrice')
        }
        this.setState({ Cardd: update, total: totalP }, () => { this.Save() });

    }
    handleRemove = (id) => {
        debugger;
        let totalP = 0;
        let items = this.state.Cardd.filter(item => item.id !== id);
        totalP = _.sumBy(items, 'TPrice')
        this.setState({ Cardd: items, total: totalP }, () => { this.Save() })
    }
    Save = () => {
        const myarray = this.state.Cardd;
        const jsonArray = JSON.stringify(myarray)
        localStorage.setItem('order', jsonArray)
        debugger;
        const str = localStorage.getItem('order')
        const parsedArray = JSON.parse(str)
        this.setState({ Cardd: parsedArray })
        console.log(this.state.Cardd);
    }



    render() {
        return (
            <>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} className=' mt-3 mb-2 '>
                        <h1 className=' disp fw-bold fs-3'>
                            Explore Shopping Clothes
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={9} className=" card-grid">

                        <Row>
                            {this.state.Cardbox.length > 0 && this.state.Cardbox.map((item) => {

                                return (
                                    <Col lg={"4"} className=" col-sm-6 col-md-6  mt-4 card" >
                                        <Card className='card' >
                                            {<img variant="top" className='col-sm-6 col-md-6 col-lg-6 col-xs-6 ms-1 image' src={item.img1} />}
                                            <Card.Body>
                                                <Card.Title > <span className='fname ps-2  fw-bold'>{item.food} </span>  <Badge className='float-end batch' bg="warning"> Qty: {item.count}</Badge></Card.Title>
                                                <Card.Text className='fw-bold fname  ps-2'>Price: <span className=' fw-light ps-2'>₹  {item.price}</span>

                                                </Card.Text>
                                                {/* <h5 className='fw-bold fs-5 '>Count: <span className='fw-bold fs-5 ps-2'> {item.Count}</span></h5> */}
                                                <Button className='btn-warning ' onClick={() => this.handleClick(item.id, item.food, item.price)}>Add Cart</Button>



                                            </Card.Body>
                                        </Card>
                                    </Col>

                                )
                            })}

                        </Row>
                    </Col>
                    <Col lg={3}>

                        <Sidebar handleChange={this.handleChange} {...this.state} handleRemove={this.handleRemove} />

                    </Col>
                </Row>






            </>

        );
    }
}


export default Cardb;

