import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/logo.png";


const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="main-navbar">
      <Container fluid>
        <div className="navbar-brand-container">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <div className="navbar-title">
            Prueba para Desarrollador Junior – React
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
