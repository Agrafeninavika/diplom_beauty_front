import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Cart4, PersonCircle, ArrowRightSquare } from "react-bootstrap-icons";
import useToken from "../hooks/useToken";
import "./header.css";
import { getData } from "../utils/network";
import { useEffect, useState } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { loggedIn } = useToken();

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const [isAdmin, setIsAdmin] = useState(false);

    const getUserData = async () => {
        const { user } = await getData('/users/one')
        if (user.role === "admin") return setIsAdmin(true)
    }
    useEffect(() => {
        getUserData()
    }, [])

  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img id="logo" src="/assets/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/" disabled={pathname === "/"}>
              Главная
            </Nav.Link>
            <Nav.Link as={Link} to="/catalog" disabled={pathname === "/catalog"}>
              Каталог
            </Nav.Link>

            <Nav.Link as={Link} to="/contacts" disabled={pathname === "/contacts"}>
              О нас
            </Nav.Link>
            <Nav>
              {!loggedIn ? (
                <NavDropdown title="Авторизация">
                  <NavDropdown.Item as={Link} to="/avtoriz/login">
                    Войти
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/avtoriz/registr">
                    Зарегистрироваться
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>                  
                {isAdmin &&
                       <>
                          <Nav.Link
                              as={Link}
                              to="/admin"
                              disabled={pathname === "/admin"}
                          >
                                    Админ
                          </Nav.Link>
                        </>
                  }
                  <Nav.Link
                    as={Link}
                    to="/profil"
                    disabled={pathname === "/collections"}
                    style={{ display: "inline-block" }}
                  >
                    <PersonCircle size={35} />
                  </Nav.Link>

                  <Nav.Link as={Link} to="/cart" style={{ display: "inline-block" }}>
                    <Cart4 size={35} />
                  </Nav.Link>

                  <Nav.Link onClick={onLogout} style={{ display: "inline-block" }}>
                    <ArrowRightSquare size={35} />
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
