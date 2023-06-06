import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import CartListItem from "../components/CartListItem";
import { cartContext } from "../templates/page";
import { getData, postData } from "../utils/network";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const { cartList, setCartList } = useContext(cartContext);
  async function getCartList() {
    if (cartList.length >= 1) {
      const { success, message, products } = await getData(
        `/products/havingId?productList=${cartList.map((item) => item.id)}`
      );
      if (!success) return alert(message);
      return setCart(
        products.map((product) => ({
          ...product,
          amount: cartList.find((item) => item.id === product.id).amount || 1,
        }))
      );
    }
    return setCart(false);
  }

  function submitOrder() {
    postData("/orders/create", {
      products: cartList,
      price: cart.reduce((accumulator, item) => accumulator + item.price * item.amount, 0),
    }).then((res) => {
      if (res.success) {
        alert("Заказ оформлен");
        return setCartList([]);
      }
      return alert("Ошибка");
    });
  }

  useEffect(() => {
    getCartList();
    console.log(cartList);
  }, [cartList]);

  return (
    <Container>
      <Row className="my-5">
        {!cart ? (
          <Col>
            <h2>Корзина пуста</h2>
            <p>Загляните в каталог, чтобы выбрать товары</p>
          </Col>
        ) : (
          <>
            <Col xs={12} md={12}>
              <Card className="w-100 p-2" style={{ borderColor: "black" }}>
                <h3
                  className="p-2 text-center"
                  style={{ color: "black", backgroundColor: "#d1b495" }}
                >
                  Корзина
                </h3>
                <ListGroup variant="flush">
                  {cart.map((item, index) => (
                    <CartListItem key={item.id} index={index} item={item} />
                  ))}
                </ListGroup>
              </Card>
            </Col>

            <Col xs={12} md={12}>
              <Card className="w-100 p-2" style={{ borderColor: "black", marginTop: "5px" }}>
                <ListGroup variant="flush">
                  <p>
                    Выбрано товаров:{" "}
                    {cart.length >= 1 &&
                      cart.reduce((accumulator, item) => accumulator + item.amount, 0)}
                  </p>
                  <h3>
                    К оплате:{" "}
                    {cart.length >= 1 &&
                      new Intl.NumberFormat("ru-RU", {
                        style: "currency",
                        currency: "RUB",
                        maximumFractionDigits: 0,
                      }).format(
                        cart.reduce(
                          (accumulator, item) => accumulator + item.price * item.amount,
                          0
                        )
                      )}
                  </h3>

                  <Button
                    className="mt-3"
                    style={{
                      width: "150px",
                      fontSize: "20px",
                      color: "black",
                      backgroundColor: "#d1b495",
                      borderColor: "black",
                    }}
                    onClick={submitOrder}
                  >
                    Оформить
                  </Button>
                </ListGroup>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
