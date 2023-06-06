import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getData } from "../utils/network";
// import data from "../data/goods.json"

const Good = () => {
  const { id } = useParams();

  // const item = data.items.find((item) => item.id === parseInt(id))
  const [product, setProducts] = useState(false);
  const [photoUrl, setPhotoUrl] = useState();

  const getProductData = () => {
    getData(`/products/one/${id}`).then(({ success, product, message }) => {
      if (!success) {
        return alert(message);
      }

      return setProducts(product);
    });
  };

  function getPhoto() {
    getData(`/photos/one/${product.photo_id}`).then(({ success, photo }) => {
      if (!success) {
        return alert("Photo not found");
      }

      return setPhotoUrl(photo.photo_path);
    });
  }

  useEffect(() => {
    getProductData();
    if (product) {
      getPhoto();
    }
  }, [product.name]);

  return (
    <>
      {!product ? null : (
        <Container>
          <h2>{product.name}</h2>

          <Row>
            <Col>
              <Card.Header>
                <Card.Img
                  variant="top"
                  style={{ width: "100%", height: "100%", margin: "auto" }}
                  src={photoUrl}
                />
              </Card.Header>
            </Col>

            <Col style={{ fontSize: "24px" }}>
              <Card.Body>
                <Card.Text>{product.name}</Card.Text>

                <Card.Text>
                  Цена: <br />
                  {new Intl.NumberFormat("ru-RU", {
                    style: "currency",
                    currency: "RUB",
                    maximumFractionDigits: 0,
                  }).format(product.price)}
                </Card.Text>

                <Card.Text>
                  Описание: <br /> {product.description}
                </Card.Text>

                <Card.Text>
                  Производитель: <br /> {product.manufacturer}
                </Card.Text>

                <Card.Text>
                  Срок годности: <br /> {product.term} мес.
                </Card.Text>

                <Card.Text>
                  Цвет товара: <br /> {product.color}
                </Card.Text>

                <Card.Text>
                  Вес товара: <br /> {product.weight} г
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Good;
