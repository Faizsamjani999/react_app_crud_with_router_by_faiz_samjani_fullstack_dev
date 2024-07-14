import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Header.modules.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // Check login status from local storage on component mount
    const loginStatus = localStorage.getItem('isLogin') === 'true';
    setIsLogin(loginStatus);
  }, []);

  const logout = () => {
    localStorage.removeItem('isLogin');
    setIsLogin(false);
    navigate("/login");
  }

  const login = () => {
    navigate("/login");
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img src='https://www.logohouse.org/images/ecommerce%20logo%20maker.png' width={"300px"} height={"100px"} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/"}>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/product"}>Product</NavLink></Nav.Link>
            <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/cart"}>Cart</NavLink></Nav.Link>
            <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/blog"}>Blog</NavLink></Nav.Link>
            <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/about"}>About</NavLink></Nav.Link>
            <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/contact"}>Contact</NavLink></Nav.Link>
            {isLogin ? (
              <Button variant="danger" onClick={logout}>Log-Out</Button>
            ) : (
              <Button variant="primary" onClick={login}>Login</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
