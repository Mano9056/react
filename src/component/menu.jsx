import { React, Component } from 'react';
import { Container,Col } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import img1 from '../img/OIP.jpeg';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';


const navicons = [
                    { name: "Home",link:"/" },
                    { name: "Admin",link:"/Admin" },
                    { name: "Service",link:"/Service" },
                    { name: "Contact",link:"/Contact" },
                    { name: "Login",link:"/Login" },
                    
            
                ]

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state ={ Navicons: navicons}
    }
   
    render() {
        return (
                <Navbar expand="lg" className=" nav  p-3 ">
                <Container className='m-0 p-0'> 
                <Navbar.Brand href="#home">
                
                <img
                  src={img1}
                  width="70"
                  height="70"
                  className="d-inline-block align-top"
                  alt=" "
                />
               </Navbar.Brand>
               <Navbar.Brand href="#home" className=" navicon fs-2 ps-3 pe-3 text-white fw-bolder" >AMAZON</Navbar.Brand>
               <Navbar.Toggle aria-controls="collapase-navbar-nav"  />
       
               
                   
                <Col>
                <Nav className="fs-5 menu ">
                    {this.state.Navicons.length > 0 && this.state.Navicons.map((item) => {
                        return (
                            <>
                            <Nav.Link href={item.link} className='ps-3 text-white '>{item.name} </Nav.Link>
                          
                            </>
                         )}

                    )}
                     </Nav>
                    
                     </Col>
                </Container>
            </Navbar>
        )
    }

}
export default Menu;


