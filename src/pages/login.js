import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router";
import useLoginGuard from "../hooks/useLoginGuard";
import { postData } from "../utils/network";

const LoginPage = () => {
  useLoginGuard({ loggedIn: true, path: "/" });
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const response = await postData("/users/login", { email, password });

    if (!response.success) {
      alert(response.message);
      if (response.code !== "NETWORK_ERROR") setPassword("");
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
                Вход в систему
              </Card.Title>

              <Form onSubmit={onLogin}>
                <Form.Group className="login-fg">
                  <Form.Label>Адрес электронной почты</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Group>

                <Form.Group className="login-fg">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>

                <Button
                  className="w-100 mt-5"
                  style={{
                    fontSize: "20px",
                    width: "150px",
                    color: "black",
                    backgroundColor: "#d1b495",
                    borderColor: "black",
                  }}
                  type="submit"
                >
                  Войти
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
