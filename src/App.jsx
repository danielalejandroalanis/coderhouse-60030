import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layout/MainLayout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ProductsData } from "./data/productData";

// Ejemplo de uso de una promesa
function myPromise() {
  return new Promise((resolve, reject) => {
    const number = 5;
    if (number === 5) {
      resolve("El número es 5");
    } else {
      reject("El número no es 5");
    }
  });
}

function App() {
  // *** Codigo bloqueante
  // function ejecutarTareaBloqueante(){
  //   const start = Date.now();
  //   while(Date.now() - start < 3000){
  //     // Esperar 3 segundos
  //   }
  //   console.log("Tarea bloqueante terminada");
  // }

  // console.log("Inicio de tarea");
  // ejecutarTareaBloqueante();
  // console.log("Fin de tarea");

  // ****Codigo no bloqueante
  // function ejecutarTareaNoBloqueante(){
  //     setTimeout(() => {
  //       console.log("Tarea no bloqueante terminada");
  //     }, 3000);
  // }

  // console.log("Inicio de tarea");
  // ejecutarTareaNoBloqueante();
  // console.log(2 + 2);
  // console.log("Fin de tarea");
  // myPromise()
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   })
  //   .finally(() => {
  //     console.log("Promesa finalizada");
  //   });

  return (
    <ChakraProvider>
      <MainLayout>
        <ItemListContainer products={ProductsData}/>
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
