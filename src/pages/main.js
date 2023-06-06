import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
const Main = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block m-auto" src="assets/karysel1.png" alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block m-auto" src="assets/sale1.png" alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block m-auto" src="assets/sale2.png" alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block m-auto" src="assets/sale3.png" alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <Card className="my-5" style={{ borderColor: "white" }}>
        <Button
          className="w-25"
          variant="outline"
          as={Link}
          to="/catalog"
          style={{
            margin: "0 auto",
            display: "block",
            color: "black",
            backgroundColor: "#d1b495",
            borderColor: "black",
            width: "25%", 
          }}
        >
          Приобрести товары
        </Button>
      </Card>
      <Card style={{ backgroundColor:"rgb(230,222,219)", width:"30%",margin:"20px"}}>
      <h2 style={{ color: "rgb(136, 87, 52)"}}>Бесплатная доставка от 3000 рублей!</h2>
      <a href="/contacts" style={{ textColor: "rgb(136, 87, 52)" }}>Подробнее</a>
      </Card>
      <h1 style={{ color: "rgb(136, 87, 52)", margin:"20px"}}>Наши преимущества</h1>
      <Row>
        <Col>
        <Card style={{ margin:"20px"}}>
          <h2 style={{textAlign:"justify" }}>У нас в интернет-магазине Pudra вы найдёте только качественный товар от проверенных поставщиков. <br />
          Мы тщательно отбираем каждый товар и следим за его бережной транспортировкой. Нам очень важен ваш комфорт и мы сделаем всё, чтобы вы остались довольны нашей продукцией</h2>

        </Card>
        </Col>
        <Col>
         <Card style={{ margin:"20px"}}>
         <Card.Img variant="top" src="/assets/fon2.jpg" style={{ width: "55%", margin: "auto" }} />
         </Card>
        </Col>
      </Row>
      <Row>

        <Col>
         <Card style={{ margin:"20px"}}>
         <Card.Img variant="top" src="/assets/no.jpg" style={{width: "30%", margin: "auto" , float:"right"}} />
         </Card>
        </Col>        
        <Col>
        <Card style={{ margin:"20px"}}>
          <h2 style={{textAlign:"justify" }}> В нашем интернет-магазине мы полностью против тестирования косметики на животных.<br />
           Мы верим, что нет никакой необходимости в жестоких экспериментах на беспомощных животных для того, чтобы создавать качественную и безопасную косметику.</h2>
        </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card style={{ margin:"20px"}}>
          <h2 style={{textAlign:"justify" }}>Наш пункт выдачи имеет удобное местоположение, недалеко от остановки общественного транспорта, также есть места для парковки атомобиля.<br />
          Он чистый и просторный, поэтому каждому будет комфортно приходить туда за своим товаром.</h2>
          <a href="/contacts" style={{textColor: "rgb(136, 87, 52)" }}>Подробнее</a>
        </Card>
        </Col>
        <Col>
         <Card style={{ margin:"20px"}}>
         <Card.Img variant="top" src="/assets/punkt.png" style={{ width: "55%", margin: "auto" }} />
         </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <Card style={{ margin:"20px" , width: "55%"}}>
          <Accordion style={{ textAlign:"right"}}>
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{ backgroundColor: "rgb(136, 87, 52)"}}><h3>Промокод</h3></Accordion.Header>
              <Accordion.Body style={{textAlign:"justify" }}><b>#ЛЕТО23</b>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card>
        </Col>        
        <Col>
        <Card style={{ margin:"20px"}}>
          <h2 style={{textAlign:"justify" }}> Промокод на первый заказ на скидку 10% всем новым пользователям!<br />
          Регистрируйся, выбирай товар и вводи промокод!.</h2>
          <a href="/avtoriz/registr" style={{ textColor: "rgb(136, 87, 52)" }}>Зарегистрироваться</a>
        </Card>
        </Col>
      </Row>
    </>
  );
};

export default Main;
