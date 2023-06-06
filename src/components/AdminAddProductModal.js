import { useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { postData, uploadImage } from "../utils/network";

export default function AdminAddProductsdModal(props) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [manufacturer, setManufacturer] = useState();
  const [weight, setWeight] = useState();
  const [term, setTerm] = useState();
  const [color, setColor] = useState();
  const [file, setFile] = useState();

  const createProduct = async (event) => {
    event.preventDefault();
    const { success, message, id: photo_id } = await uploadImage(file);
    if (success) {
      const response = await postData("/products/create", {
        name,
        description,
        price,
        manufacturer,
        weight,
        term,
        color,
        photo_id,
      });

      if (!response.success) {
        alert(response.message);
        if (response.code !== "NETWORK_ERROR");
        return;
      }
      setName("");
      setDescription("");
      setPrice("");
      setManufacturer("");
      setWeight("");
      setTerm("");
      setColor("");
      props.getProductList();
      return alert(response.message);
    }
    return alert(message);
  };
  return (
    <Modal
      {...props}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ textAlign: "center", color: "black", backgroundColor: "#d1b495" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">Добавление нового товара</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Form onSubmit={createProduct}>
            <Form.Group className="reg-fg">
              <Form.Label>Название товара</Form.Label>

              <Form.Control
                size="lg"
                type="text"
                placeholder="Введите название товара"
                required
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="reg-fg">
              <Form.Label>Описание товара</Form.Label>

              <Form.Control
                size="lg"
                as="textarea"
                type="text"
                placeholder="Введите описание товара"
                required
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="reg-fg">
              <Form.Label>Цена товара</Form.Label>

              <Form.Control
                size="lg"
                type="number"
                placeholder="Введите цену товара"
                required
                id="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="reg-fg">
              <Form.Label>Страна-производитель</Form.Label>

              <Form.Control
                size="lg"
                as="textarea"
                type="text"
                placeholder="Введите страну-производителя"
                required
                id="manufacturer"
                value={manufacturer}
                onChange={(event) => setManufacturer(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="reg-fg">
              <Form.Label>Срок годности товара</Form.Label>

              <Form.Control
                size="lg"
                type="number"
                placeholder="Введите срок годности товара"
                required
                id="term"
                value={term}
                onChange={(event) => setTerm(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="reg-fg">
              <Form.Label>Цвет</Form.Label>

              <Form.Control
                size="lg"
                as="textarea"
                type="text"
                placeholder="Введите цвет товара"
                required
                id="color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="reg-fg">
              <Form.Label>Вес</Form.Label>

              <Form.Control
                size="lg"
                type="number"
                placeholder="Введите вес товара"
                required
                id="weight"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Фото товара</Form.Label>

              <Form.Control
                type="file"
                size="lg"
                onChange={(event) => setFile(event.target.files[0])}
              />
            </Form.Group>

            <Button
              className="ms-auto mt-3"
              type="submit"
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
          </Form>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button
          onClick={props.onHide}
          style={{
            width: "250px",
            fontSize: "20px",
            color: "black",
            backgroundColor: "#d1b495",
            borderColor: "black",
          }}
        >
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
