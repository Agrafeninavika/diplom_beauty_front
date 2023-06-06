import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import AdminAddProductsdModal from "../components/AdminAddProductModal";
import AdminEditProductsdModal from "../components/AdminEditProductModal";
import { cartContext } from "../templates/page";
import { getData, postData } from "../utils/network";
// import useToken from "../hooks/useToken";

const ProductCard = ({ product, isAdmin, getProductList, handleAdd, deleteProduct }) => {
  const [editModalShow, setEditModalShow] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(false);

  function getPhoto() {
    getData(`/photos/one/${product.photo_id}`).then(({ success, photo }) => {
      if (success) return setPhotoUrl(photo.photo_path);
    });
  }

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <Card className="mx-auto" style={{ width: "18rem" }}>
      <Link to={String(product.id)}>
        <Card.Img variant="top" src={photoUrl} style={{ aspectRatio: 1 }} />
      </Link>

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>

        <Card.Text>
          Описание:
          <p>{product.description}</p>
        </Card.Text>

        <Card.Text>
          Цена:{" "}
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
            maximumFractionDigits: 0,
          }).format(product.price)}
        </Card.Text>

        {isAdmin ? (
          <>
            <AdminEditProductsdModal
              show={editModalShow}
              productData={product}
              getProductList={getProductList}
              onHide={() => setEditModalShow(false)}
            />

            <Container className="d-flex" style={{ justifyContent: "right" }}>
              <PencilSquare size={45} onClick={() => setEditModalShow(true)} />

              <Trash size={45} onClick={() => deleteProduct(product.id)} />
            </Container>
          </>
        ) : (
          <Button
            className="w-100"
            onClick={() => handleAdd(product.id)}
            style={{
              width: "250px",
              fontSize: "20px",
              color: "black",
              backgroundColor: "#d1b495",
              borderColor: "black",
            }}
          >
            Купить
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

const Buy = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [addModalShow, setAddModalShow] = useState(false);
  const [productList, setProductList] = useState(false);
  const [filteredProductList, setFilteredProductList] = useState(false);
  const [filterProperty, setFilterProperty] = useState("Все");
  const { cartList, setCartList } = useContext(cartContext);

  const filterProperties = [
    "Все",
    "Помада",
    "Тени для век",
    "Тональный крем",
    "Румяна",
    "Карандаш для бровей",
    "Шампунь",
  ];

  const getUserData = async () => {
    const { user } = await getData("/users/one");
    if (user.role === "admin") return setIsAdmin(true);
  };

  async function getProductList() {
    try {
      const { success, products, message } = await getData("/products/list");
      if (!success) return console.log(message);
      setProductList(products);
      return setFilteredProductList(products);
    } catch (error) {
      console.error(error);
    }
  }

  function handleAdd(itemId) {
    const candidate = cartList.findIndex((item) => item.id === itemId);
    if (candidate >= 0) {
      const updatedCart = [...cartList];
      updatedCart[candidate].amount += 1;
      setCartList(updatedCart);
    } else {
      setCartList((prev) => [...prev, { id: itemId, amount: 1 }]);
    }
  }

  async function deleteProduct(productId) {
    try {
      const { success, message } = await postData("/products/del", { productId });
      if (!success) return console.log(message);
      await getProductList();
      return alert(message);
    } catch (error) {
      console.error(error);
    }
  }

  function filterProductList() {
    if (productList) {
      const filteredList = productList.filter(
        (item) =>
          filterProperty === "Все" || item.name.toLowerCase().includes(filterProperty.toLowerCase())
      );

      return setFilteredProductList(filteredList);
    }
  }

  useEffect(() => {
    filterProductList();
  }, [filterProperty]);

  useEffect(() => {
    getProductList();
    getUserData();
  }, []);

  return (
    <Container>
      <h1 className="pt-3" style={{ color: "rgb(136, 87, 52)" }}>
        Каталог
      </h1>
      <center>
      <img src="/assets/preview.jpg" style={{display:"block", width:"540px" , margin: "20px" }} /></center>
      <Card style={{ marginBottom: "30px", borderColor: "white" }}>
      
        <Button
          className="d-block w-25 mx-auto"
          variant="outline"
          as={Link}
          to="/preview"
          style={{
            color: "black",
            backgroundColor: "#d1b495",
            borderColor: "black",
          }}
        >
          Подобрать косметику
        </Button>
      </Card>

      {isAdmin && (
        <>
          <AdminAddProductsdModal
            show={addModalShow}
            getProductList={getProductList}
            onHide={() => setAddModalShow(false)}
          />

          <Button
            variant="primary"
            onClick={() => setAddModalShow(true)}
            style={{
              width: "250px",
              fontSize: "20px",
              color: "black",
              backgroundColor: "#d1b495",
              borderColor: "black",
            }}
          >
            Добавить товар
          </Button>
        </>
      )}

      <Container className="w-80">
        <div className="my-3">
          {filterProperties.map((item, index) => (
            <Button
              className="mx-1"
              key={index}
              disabled={item === filterProperty}
              onClick={() => setFilterProperty(item)}
              style={{ color: "black", backgroundColor: "#d1b495", borderColor: "black" }}
            >
              {item}
            </Button>
          ))}
        </div>

        {!filteredProductList ? (
          <h1>Товары сейчас не доступны</h1>
        ) : (
          <Row>
            {filteredProductList.map((product) => (
              <Col xs={12} md={3} key={product.id}>
                <ProductCard
                  key={product.id}
                  product={product}
                  isAdmin={isAdmin}
                  getProductList={getProductList}
                  handleAdd={handleAdd}
                  deleteProduct={deleteProduct}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
};
export default Buy;
