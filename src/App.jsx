import "./App.css";
import { myStyles } from "./styles/App.styles";
import styles from "./Estilos.module.css";

//tiene this
// function App() {
//   const isColorBlue = false;

//   if (isColorBlue) {
//     console.log("Es Color Azul");
//   } else {
//     console.log("No es Color Azul");
//   }

//   //Menos aceptable
//   // if (isColorBlue) {
//   //   return <div>Es Color Azul</div>;
//   // } else {
//   //   return <div>No es Color Azul</div>;
//   // }

//   //Mas Aceptable -- ECMAScript 6 (ES6)
//   return isColorBlue ? <div>Es Color Azul</div> : <div>No es Color Azul</div>;
// }

// export default App;

//no tiene this

const App = () => {
  // return <div className="my-class">Hola a todos!</div>;
  const isBlue = true;

  //CSS in JS ---> Estilos CSS en Javascript
  // const myStyles = {
  //   color: isBlue ? "blue" : "red",
  //   fontSize: "2rem",
  //   fontWeight: "bold",
  // };

  //CSS Module

  // return <div style={myStyles}>Hola a todos</div>;
  return <div className={isBlue ? styles.estilosTwo : styles.estilosOne}>Hola a todos</div>;
};

export default App;
