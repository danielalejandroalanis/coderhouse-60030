import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layout/MainLayout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const [state, setState] = useState(0);
  const [stateTwo, setStateTwo] = useState(0);

  //useEffect = hook que se ejecuta despues de que el componente se renderiza, sirve para controlar efectos secundarios en el ciclo de vida del componente
  //Se va a ejecutar SIEMPRE aunque sea una vez (la primera vez que se renderiza el componente)

  //1 - useEffect Feo - useEffect sin control
  useEffect(() => {
    console.log("Se renderizó el componente App - useEffect sin control");
  });

  //2 - useEffect ideal - useEffect controlado -- useEffect con dependencias vacias (Es el mas comun)
  useEffect(() => {
    // llamada a la api para traer todos mis productos
    console.log("Me rendericé por primera vez - useEffect dependencias vacias");
  }, []);

  //3 - useEffect con dependencias - useEffect controlado
  useEffect(() => {
    console.log("Me rendericé por primera vez - useEffect con dependencias");
  }, [state]);

  return (
    <ChakraProvider>
      <MainLayout>
        <ItemListContainer greeting="Bienvenidos a mi tienda!" />
        <button
          onClick={() => {
            setState(state + 1);
          }}
        >
          Cambio de Estado 1
        </button>

        <button
          onClick={() => {
            setStateTwo(stateTwo + 1);
          }}
        >
          Cambio de Estado 2
        </button>
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
