import { React, Component } from 'react';
import { Col, Row, Table, Button, Form } from 'react-bootstrap';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Item: [], food: '', price: '', count: '', id: null
        }
    }
    componentDidMount() {
        const str = localStorage.getItem('array')
        const parsedArray = JSON.parse(str)
        this.setState({ Item: parsedArray == null ? []:parsedArray })
        console.log(this.state.Item);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = () => {
       
        let data = [];
        let obj = {
            // id: this.state.Item[this.state.Item.length-1].id +1,
            id: this.state.Item.length + 1,
            food: this.state.food,
            price: this.state.price,
            count: this.state.count,
            img1:"http://localhost:3000/img/"+this.state.food+".jpg"
        };
        if (this.state.Item.length > 0) {
            data = this.state.Item;
            data.push(obj);
        } else {
            data.push(obj);
        }
        this.setState({ Item: data }, () => { this.Save() })
    }
    handleEdit = (item) => {
        this.setState({
            id: item.id,
            food: item.food,
            price: item.price,
            count: item.count,
        }, () => { this.Save() });
    }
    handleUpdate = () => {
        debugger;
        {
            let obj = {
                id: this.state.id,
                food: this.state.food,
                price: this.state.price,
                count: this.state.count
            }
            let update = [];
            if (this.state.Item.length > 0) {
                update = this.state.Item.map((item =>
                    item.id == this.state.id ? obj : item));
            }
            this.setState({ Item: update }, () => { this.Save() });
            console.log(this.state.Item)
        };
    }
    handleRemove = (id) => {
        let items = this.state.Item.filter(item => item.id !== id)
        this.setState({ Item: items }, () => { this.Save() });
    }
    Save = () => {
        const myarray = this.state.Item;
        const jsonArray = JSON.stringify(myarray)
        localStorage.setItem('array', jsonArray)
        debugger;
        const str = localStorage.getItem('array')
        const parsedArray = JSON.parse(str)
        this.setState({ Item: parsedArray })
        console.log(this.state.Item);
    }

    /*image upload strats */
    


    /*image upload strats */
    render() {
        return (
            <>
                <Row>
                    <Col lg={6} className="wrapper">
                        <h1 className='fw-bold fs-5 text-center mt-3'>ADMIN</h1>
                        <Form className="w-100 mt-5" >
                            <Form.Group className="mb-3 ps-5 w-50" >
                                <Form.Label>Food</Form.Label>
                                <Form.Select aria-label="Select The Menu" name="food"
                                    value={this.state.food}
                                    onChange={(e) => this.handleChange(e)}>
                                    <option>Open this select Brand</option>
                                    <option >OTTO</option>
                                    <option  >Allen Solly</option>
                                    <option  >Adiddas</option>
                                    <option  >Volume Zero</option>
                                    <option  >Peter England</option>
                                    <option  >Puma</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3 ps-5 w-50" >
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="price"
                                    value={this.state.price}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 ps-5 w-50" >
                                <Form.Label>Count</Form.Label>
                                <Form.Control
                                    type="Number"
                                    name="count"
                                    value={this.state.count}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </Form.Group>
                            {/* <Form.Group className="mb-3 ps-5 w-50" >
                                <Form.Label>File</Form.Label>
                                <Form.Control
                                   type="file" onChange={this.handleFileChange}
                                  
                                />
                            </Form.Group> */}
                            <Form.Group className="mb-2 ps-5 w-50" >
                                <Button variant="warning" className=" mt-2" onClick={this.handleSubmit}>
                                    ADD
                                </Button>
                                <Button variant="warning" className=" mt-2 ms-3" onClick={this.handleUpdate} >
                                    UPDATE
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col lg={1} className="vl"></Col>
                    <Col lg={5} >
                        <h2 className='fw-bold fs-5 text-center mt-3'>ADDED ITEMS</h2>
                        <Table striped bordered hover className='me-3'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>FOOD</th>
                                    <th>PRICE</th>
                                    <th>COUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Item.length > 0 && this.state.Item.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.food}</td>
                                            <td>{item.price}</td>
                                            <td>{item.count}</td>
                                            <td>
                                                <Button variant='warning' onClick={() => this.handleRemove(item.id)} >DEL
                                                </Button>
                                            </td>
                                            <td>
                                                <Button variant='warning' onClick={() => this.handleEdit(item)}>EDIT</Button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )}

                            </tbody>
                        </Table>
                        
                    </Col>
                </Row>
            </>
        )
    }

}
export default Admin;