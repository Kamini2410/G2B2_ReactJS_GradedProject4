import 'bootstrap/dist/css/bootstrap.css';
import {Form,Button,Navbar, Nav,Container,NavDropdown} from 'react-bootstrap'
const Home=()=>{
    return(
        <div>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Movies in theaters</Nav.Link>
            <Nav.Link href="#action2">Coming soon</Nav.Link>
            <Nav.Link href="#action2">Top rated Indian</Nav.Link>
            <Nav.Link href="#action2">Top rated movies</Nav.Link>
            <Nav.Link href="#action2">Favourites</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
          
        </div>
    )
}


export{Home}