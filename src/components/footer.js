import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <Container id="footer" fluid>
      <Row>
        <Col className="footer-element" xs={12} sm={4}>
          <h3>Магазин косметики</h3>
          <p>Онлайн-магазин для покупки косметики</p>
        </Col>
        <Col className="footer-element" xs={12} sm={4}>
          <h3>Страницы магазина</h3>
          <ul>
            <li>
              <Link className={pathname === "/" ? "current" : ""} to="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className={pathname === "/catalog" ? "current" : ""} to="/catalog">
                Каталог
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/about/contacts" ? "current" : ""}
                to="/about/contacts"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </Col>
        <Col className="footer-element" xs={12} sm={4}>
          <h3>Внешние ссылки</h3>
          <ul>
            <li>
              <a target="_blank" rel="nofollow noreferrer" href="https://vk.com">
                ВК: @Pudra
              </a>
            </li>
            <li>
              <a href="mailto:issues@gmail.com">Почта: Pudra@gmail.com</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="footer-element">
          <div>&copy; Магазин косметики Pudra 2023</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
