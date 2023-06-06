import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import "./contacts.css";
import Accordion from "react-bootstrap/Accordion";

const Contacts = () => {
  return (
    <Container>
      <h1 style={{ color: "rgb(136, 87, 52)" }}>Контакты</h1>
      <Card style={{ width: "90%" }}>
        <Card.Body>
        <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{ backgroundColor: "rgb(136, 87, 52)" }}><h3>О нас</h3></Accordion.Header>
              <Accordion.Body style={{textAlign:"justify" }}>
              Добро пожаловать в интернет-магазин косметики Pudra!<br />
              Наша компания только начала работу на рынке, но мы уже можем похвастаться большим ассартиментом, высоким качеством товаров и низкими ценами. На нашем сайте вы найдете все необходимое для создания своего идеального образа. У нас есть разнообразие косметических средств для ухода за кожей, волосами. Наша продукция включает в себя крема, маски, шампуни, кондиционеры, а также всё для создания идиального макияжа.Мы работаем только с проверенными поставщиками, которые гарантируют качество своей продукции. Мы постоянно обновляем нашу коллекцию, чтобы вы могли наслаждаться самыми новыми и инновационными косметическими средствами на рынке. <br />
              Мы совершенствуем свои товары и сервис, что бы вы могли чувствовать себя максимально
              комфортно. <br />
              Сделав заказ в нашем магазине, вы не пожалеете о своём выборе! <br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
      <Card style={{ width: "90%" }}>
        <Card.Body>
        <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{ backgroundColor: "rgb(136, 87, 52)" }}><h3>Доставка</h3></Accordion.Header>
              <Accordion.Body style={{textAlign:"justify" }}>
              Доставка производится бесплатно при заказе от 3000 рублей и поставляется в течении 2-5 рабочих дней. <br />
              При заказе менее 3000 рублей доставка составляет 300 рублей. Товар доставляется в пукт выдачи магазина и хранится 10 рабочих дней.<br /> 
              Доставка на дом расчитывается исходя из удалённости от пункта выдачи.<br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>

      <Card style={{ width: "90%"  }}>
        <Card.Body>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{ backgroundColor: "rgb(136, 87, 52)" }}><h3>Способы оплаты</h3></Accordion.Header>
              <Accordion.Body style={{textAlign:"justify" }}>
              Банковские карты (Visa, Mastercard, «Мир».), QIWI кошелек,Apple Pay и Google Pay,
              наличными на пункте выдачи <br />
              Все вопросы по почте <b>Pudra@gmail.com</b>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="/assets/karta.jpg" style={{ width: "55%", margin: "auto" }} />

        <Card.Body>
          <Card.Title className="fw-bold" style={{ color: "#885734" }}>
            Пункт выдачи заказов
          </Card.Title>

          <Card.Text>г.Владимир, ул.Мира, 28а к2</Card.Text>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{ backgroundColor: "rgb(136, 87, 52)" }}><h3>Информация о возврате</h3></Accordion.Header>
              <Accordion.Body style={{textAlign:"justify" }}>
              Вы можете проверить посылку сразу при получении и при обнаружении брака вернуть товар бесплатно, а также вернуть деньги за доставку товара. <br />
              Браком считается товар ненадлежащего качества (вскрытый, повреждённый, просроченный). Также, если вам пришёл не тот товар, который вы заказали, вы сможете сделать бесплатный возврат.<br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>

      <p className="fw-bold" style={{ color: "#885734" }}>
        Порадуйте себя и близких, сделайте лучший подарок!
      </p>
    </Container>
  );
};
export default Contacts;
