
import 'bootstrap/dist/css/bootstrap.css';

import {Form,Button,Navbar, Nav,Container,NavDropdown} from 'react-bootstrap'

const NavBar=()=>{
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
            <Nav.Link href="./Movies_in_theaters">Movies in theaters</Nav.Link>
            <Nav.Link href="/Coming_soon">Coming soon</Nav.Link>
            <Nav.Link href="/Top_rated_Indians">Top rated Indian</Nav.Link>
            <Nav.Link href="/Top_rated_movies">Top rated movies</Nav.Link>
            <Nav.Link href="/Favourites">Favourites</Nav.Link>
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

export {NavBar}




