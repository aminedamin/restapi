import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NavContact=()=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/listcontact'>Contacts</Nav.Link>
            <Nav.Link as={Link} to='/addcontact'>Add Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavContact