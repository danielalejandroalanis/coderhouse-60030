import { Button } from "@chakra-ui/react";
import React from "react";
import { useItemsCollection } from "../hooks";

const ChildMemo = React.memo(({ count }) => {
  console.log("Se renderizó el componente hijo");
  return <div>Contador: {count}</div>;
});

export const Memo = () => {
  const [count, setCount] = React.useState(0);
  const [auxState, setAuxState] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleAuxState = () => {
    setAuxState(auxState + 1);
  };

  console.log("Se renderizó el componente padre");

  return (
    <div>
      <Button onClick={handleIncrement}>Incrementar contador</Button>
      <Button onClick={handleAuxState}>Incrementar contador auxiliar</Button>
      <ChildMemo count={count} />
    </div>
  );
};
