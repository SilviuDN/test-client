import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import AuthService from '../../../services/auth.services'

const Navigation = ({ storeUser , loggedUser}) => {

    const authService = new AuthService()

    const logout = () => {
        authService
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log(err))
    }


    return (
        <Navbar bg="dark" variant="dark" expand="md" style={{ marginBottom: '30px' }}>
            <Navbar.Brand href="#home">MateCuMatei</Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/courses">Courses</Link>

                    {loggedUser && ( loggedUser.role === 'admin' || loggedUser.role === 'superUser' )
                    ?
                    <Link className="nav-link" to="/courses/new">NewCourse</Link>
                    :
                    null                    
                    }
                
                    {!loggedUser
                        ?
                        <>
                            {/* <Link className="nav-link" to="/signup">SignUp</Link> */}
                            {/* <Link className="nav-link" to="/login">LogIn</Link> */}
                        </>
                        :
                        <>
                            <span className="nav-link" onClick = { () => logout()}>LogOut</span>
                        </>
                    }
                    <span className="nav-link" >Salutare {loggedUser? ', '+loggedUser.email : ''}!</span>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation