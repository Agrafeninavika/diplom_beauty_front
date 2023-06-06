import { useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { postData, uploadImage } from "../utils/network";

export default function AdminEditProductsdModal(props) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [manufacturer, setManufacturer] = useState();
  const [weight, setWeight] = useState();
  const [term, setTerm] = useState();
  const [color, setColor] = useState();
  const [file, setFile] = useState();

  const editProduct = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const { success, message, id: photo_id } = await uploadImage(file);
    const response = await postData(`/products/update/${props.productData.id}`, {
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
    props.onHide();
    return alert(response.message);
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
        <Modal.Title id="contained-modal-title-vcenter">Изменение данных товара</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Form onSubmit={editProduct}>
            <Form.Group className="reg-fg">
              <Form.Label>Название товара</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Название товара"
                defaultValue={props.productData.name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="reg-fg">
              <Form.Label>Описание товара</Form.Label>
              <Form.Control
                size="lg"
                as="textarea"
                type="text"
                placeholder="Описание товара"
                defaultValue={props.productData.description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="reg-fg">
              <Form.Label>Цена товара</Form.Label>
              <Form.Control
                size="lg"
                type="number"
                defaultValue={props.productData.price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="reg-fg">
              <Form.Label>Страна-производитель</Form.Label>
              <Form.Control
                size="lg"
                as="textarea"
                type="text"
                placeholder="Введите cтрану-производителя"
                defaultValue={props.productData.manufacturer}
                onChange={(event) => setManufacturer(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="reg-fg">
              <Form.Label>Срок годности товара</Form.Label>
              <Form.Control
                size="lg"
                type="number"
                defaultValue={props.productData.term}
                onChange={(event) => setTerm(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="reg-fg">
              <Form.Label>Цвет товара</Form.Label>
              <Form.Control
                size="lg"
                as="textarea"
                type="text"
                placeholder="Введите цвет товара"
                defaultValue={props.productData.color}
                onChange={(event) => setColor(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="reg-fg">
              <Form.Label>Вес товара</Form.Label>
              <Form.Control
                size="lg"
                type="number"
                defaultValue={props.productData.weight}
                onChange={(event) => setWeight(event.target.value)}
                required
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
              Изменить данные товара
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
