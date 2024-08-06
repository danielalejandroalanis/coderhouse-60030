import "./App.css";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  return (
    <div>
      <h1>Formulario de inscripcion</h1>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
      <ButtonComponent label="Miboton" />
      <ButtonComponent label="Miboton2" />
      <ButtonComponent label="Miboton3" />
      <ButtonComponent
        label="Login"
        myFunction={() => {
          console.log("login");
        }}
      />
      <ButtonComponent
        label="Logout"
        myFunction={() => {
          console.log("logout");
        }}
      />
    </div>
  );
}

export default App;
