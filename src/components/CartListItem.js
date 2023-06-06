import { useContext } from "react";
import { Button, Stack } from "react-bootstrap";
import { DashCircle, PlusCircle } from "react-bootstrap-icons";
import { cartContext } from "../templates/page";
import { Trash3 } from "react-bootstrap-icons";

export default function CartListItem(props) {
  const { item } = props;

  const { cartList, setCartList } = useContext(cartContext);

  function increaseAmount(itemId) {
    const candidate = cartList.findIndex((item) => item.id === itemId);
    const updatedCart = [...cartList];
    updatedCart[candidate].amount += 1;
    setCartList(updatedCart);
  }

  function reduceAmount(itemId) {
    const candidate = cartList.findIndex((item) => item.id === itemId);
    const updatedCart = [...cartList];
    updatedCart[candidate].amount -= 1;
    setCartList(updatedCart);
  }

  function deleteItem(itemId) {
    setCartList((prev) =>
      prev.filter((element) => {
        return element.id !== itemId;
      })
    );
  }

  return (
    <Stack className="p-2" direction="horizontal" gap={3}>
      <span>{item.name}</span>

      <Stack direction="horizontal" gap={2}>
        <DashCircle
          size={30}
          color={item.amount <= 1 && "grey"}
          style={
            item.amount <= 1
              ? {}
              : {
                  cursor: "pointer",
                }
          }
          onClick={item.amount <= 1 ? null : () => reduceAmount(item.id)}
        />

        <span>{item.amount}</span>

        <PlusCircle
          as={Button}
          onClick={() => increaseAmount(item.id)}
          style={{
            cursor: "pointer",
          }}
          size={30}
        />
      </Stack>

      <div className="ms-auto">
        <span className="me-2">
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
            maximumFractionDigits: 0,
          }).format(item.price * item.amount)}
        </span>

        <Button variant="danger" onClick={() => deleteItem(item.id)}>
          <Trash3 size={25} />
        </Button>
      </div>
    </Stack>
  );
}
