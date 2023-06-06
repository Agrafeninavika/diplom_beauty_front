import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Table } from "react-bootstrap";
import { getData, postData } from "../utils/network";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  const getOrdersList = async () => {
    const { success, orders: ordersList } = await getData("/orders/my-orders");
    if (!success) {
      return;
    }

    return setOrders(ordersList);
  };

  const tableHead = [
    "Номер заказа",
    "Количество",
    "Товар",
    "Общая стоимость заказа",
    "Контактная информация",
  ];

  useEffect(() => {
    getOrdersList();
  }, []);

  return (
    <Container>
      {orders && orders.length === 0 ? (
        <h1 className="d-flex justify-content-center">Заказов пока нет</h1>
      ) : (
        <Table
          responsive="sm"
          bordered
          striped
          title="Мои заказы"
          className="my-3"
          style={{ backgroundColor: "white", borderRadius: 5 }}
        >
          <>
            <thead>
              <tr>
                <th colSpan={12}>Мои заказы</th>
              </tr>
              <tr>
                {tableHead.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td align="center">{order.id}</td>

                  <td align="right">
                    {Array.isArray(order.amount)
                      ? order.amount.map((amount, index) => <p key={index}>{amount}</p>)
                      : order.amount}
                  </td>

                  <td>
                    {Array.isArray(order.product_name)
                      ? order.product_name.map((product_name, index) => (
                          <p key={index}>{product_name}</p>
                        ))
                      : order.product_name}
                  </td>

                  <td>
                    {new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" }).format(
                      order.total_price
                    )}
                  </td>

                  <td>Имя: {order.client}</td>
                </tr>
              ))}
            </tbody>
          </>
        </Table>
      )}
    </Container>
  );
};

const UserForm = ({ currentName, currentEmail }) => {
  const [newName, setNewName] = useState(currentName);
  const [newEmail, setNewEmail] = useState(currentEmail);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const editUserData = (e) => {
    e.preventDefault();
    postData("/users/profile/edit", { name: newName, email: newEmail, password: newPassword }).then(
      (response) => {
        if (!response.success) {
          alert(response.message);
          if (response.code !== "NETWORK_ERROR") return;
        }
        return alert("Данные успешно изменены");
      }
    );
  };

  return (
    <Container className="my-5">
      <Col className="mx-auto" md={6} sm={12}>
        <Card className="w-100" style={{ borderColor: "black" }}>
          <Card.Body>
            <Card.Title
              className="p-2 text-center"
              style={{ color: "black", backgroundColor: "#d1b495" }}
            >
              Изменение данных
            </Card.Title>

            <Form onSubmit={editUserData}>
              <Form.Group className="reg-fg">
                <Form.Label>Имя</Form.Label>

                <Form.Control
                  type="name"
                  placeholder="Введите имя"
                  id="name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="reg-fg">
                <Form.Label>Адрес электронной почты</Form.Label>

                <Form.Control
                  type="email"
                  placeholder="Введите email"
                  id="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="reg-fg">
                <Form.Label>Текущий пароль</Form.Label>

                <Form.Control
                  type="password"
                  placeholder="Введите пароль"
                  id="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="reg-fg">
                <Form.Label>Новый Пароль</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Введите новый пароль"
                  id="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                className="mt-4"
                type="submit"
                disabled={
                  newName === "" || newEmail === "" || currentPassword === "" || newPassword === ""
                }
                style={{
                  fontSize: "20px",
                  width: "250px",
                  color: "black",
                  backgroundColor: "#d1b495",
                  borderColor: "black",
                }}
              >
                Сохранить изменения
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

const Profil = () => {
  // eslint-disable-next-line no-unused-vars
  const [ordersList, setOrdersList] = useState(false);

  const [user, setUser] = useState();

  const getUserData = () => {
    getData("/users/one").then((response) => setUser(response.user));
  };

  const getOrdersList = () => {
    getData("/orders/list").then(({ orders }) => setOrdersList(orders));
  };

  function onLoad() {
    getUserData();
    getOrdersList();
  }
  useEffect(() => {
    onLoad();
  }, []);
  return (
    <Container>
      <h1 className="pt-3" style={{ color: "rgb(136, 87, 52)" }}>
        Профиль
      </h1>
      {user && (
        <>
          <h2>Ваше имя: {user.name}</h2>
          <h2>Ваша почта: {user.email}</h2>
        </>
      )}

      <OrdersTable />
      {!user ? null : <UserForm currentName={user.name} currentEmail={user.email} />}
    </Container>
  );
};
export default Profil;
