/* eslint-disable react/no-array-index-key */
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { getData } from "../utils/network";
import { useNavigate } from "react-router-dom";
import {  Button } from "react-bootstrap"


const UserCard = ({ user, deleteUser }) => {
  return (
      <tr>
          <td><p>{user.name}</p></td>
          <td><p>{user.email}</p></td>
          <td><p>{user.role}</p></td>
      </tr>


  )
}

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [isAdmin] = useState(false);
  const [userList, setUserList] = useState(false)
  const [user, setUser] = useState();

  const getUserData = async () => {
    const { user } = await getData("/users/one");

    setUser(user);
  };

  const tableHead = [
    "Номер заказа",
    "Количество",
    "Товар",
    "Общая стоимость заказа",
    "Контактная информация",
  ];

  const getOrdersList = async () => {
    const { success, orders: ordersList } = await getData("/orders/list");
    if (!success) {
      return alert("Error");
    }

    return setOrders(ordersList);
  };

  if (user && user.role !== "admin") {
    navigate("/");
  }

  useEffect(() => {
    getUserData();
    getOrdersList();
  }, []);

  async function getUserList() {
    const { success, users, message } = await getData('/users/list')
    if (!success) return alert(message);
    return setUserList(users)
  }
  useEffect(() => {
    getUserList()
    getUserData()
  }, [])

  return (
    <Container className="my-5">
      <h1 style={{ color: "rgb(136, 87, 52)" }}>Админ панель</h1>
      <Table
        responsive="sm"
        bordered
        hover
        striped
        title="Записи"
        style={{ backgroundColor: "white", borderRadius: 5 }}
      >
        {orders && orders.length === 0 ? (
          <h1 className="d-flex justify-content-center">Таблица с заказами пуста</h1>
        ) : (
          <>
            <thead>
              <tr>
                <th colSpan={12}>Заказы</th>
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
        )}
      </Table>
      <Table striped bordered hover size="sm" responsive>
                        <thead className="table-admin">
                            <tr>
                              <th colSpan={12}>Пользователи</th>
                            </tr>
                            <tr>
                                <th><h3 style={{ textAlign: 'center', }}>Имя</h3></th>
                                <th><h3 style={{ textAlign: 'center', }}>Почта</h3></th>
                                <th><h3 style={{ textAlign: 'center', }}>Роль</h3></th>
                            </tr>
                        </thead>
                        <tbody className="table-admin">
                            {userList ?
                                userList.map((user) => <UserCard
                                    key={user.id}
                                    user={user}
                                    isAdmin={isAdmin}
                                    getUserList={getUserList}
                                    
                                />
                                )
                                :
                                <p>Позьзователи отсутствуют.</p>
                            }</tbody>
        </Table>
    </Container>
  );
};

export default Admin;
