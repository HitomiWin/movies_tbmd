import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useGenresContext } from "../../contexts/GenresContext";

const Navigation = () => {
  const { genreId } = useGenresContext();

  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Link to="/" className="navbar-brand">
          <Navbar.Brand>Movies</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <NavLink
                to={`/movies/genres/${genreId}`}
                className="nav-link"
              >
                Genres
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to={"/movies/search"} className="nav-link">
                Search
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to={"/movies/history"} className="nav-link">
                History
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
