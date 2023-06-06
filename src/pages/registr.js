import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router";
import useRegistrGuard from "../hooks/useRegistrGuard";
import { postData } from "../utils/network";

const Registr = () => {
  useRegistrGuard({ loggedIn: true, path: "/" });
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegistr = async (e) => {
    e.preventDefault();
    const response = await postData("/users/signup", { name, email, password });

    if (!response.success) {
      alert(response.message);
      setPassword("");
      return;
    }

    localStorage.setItem("token", response.token);
    navigate("/");
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="my-5" style={{ borderColor: "black" }}>
            <Card.Body>
              <Card.Title
                className="p-2 text-center text-uppercase"
                style={{ color: "black", backgroundColor: "#d1b495" }}
              >
                Регистрация
              </Card.Title>

              <Form onSubmit={onRegistr}>
                <Form.Group className="reg-fg">
                  <Form.Label>Имя</Form.Label>
                  <Form.Control
                    type="string"
                    placeholder="Введите имя"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Form.Group>

                <Form.Group className="reg-fg">
                  <Form.Label>Адрес электронной почты</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Введите email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Group>

                <Form.Group className="reg-fg">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Введите пароль"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>

                <Button
                  className="w-100 mt-5"
                  style={{
                    fontSize: "20px",
                    color: "black",
                    backgroundColor: "#d1b495",
                    borderColor: "black",
                  }}
                  type="submit"
                >
                  Зарегистироваться
                </Button>
                <br />
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Registr;
