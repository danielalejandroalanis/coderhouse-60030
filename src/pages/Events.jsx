import { useEffect, useState } from "react";

const onScroll = () => {
  console.log("scrolling");
};

// export const Events = ({componentType}) => {
export const Events = ({
  handleClick = () => {
    alert("Click Defecto");
  },
  label = "Default",
}) => {
  //   useEffect(() => {
  //     // Cambia el titulo de la pagina
  //     document.title = "Eventos";

  //     window.addEventListener("scroll", onScroll);

  //     // Cleanup => funcion que se ejecuta cuando el componente se desmonta
  //     return () => {
  //       console.log("Componente desmontado");
  //       window.removeEventListener("scroll", onScroll);
  //     };
  //   }, []);
  //   return (
  //     <div>
  //       <h1>Events</h1>
  //       <button onClick={sumaNumero}></button>
  //     </div>
  //   );

  //Retorno de componente dinamico segun el valor de componentType
  // switch(componentType){
  //     case 'input':
  //         return <input type="text" />;
  //     case 'button':
  //         return <button>Click me</button>;
  //     default:
  //         return <div>Componente no soportado</div>;
  // }

  //   const handleClick = () => {
  //     alert("Button Event");
  //   }

  const handleOnChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.id);
    setInputValue(e.target.value);
  };

  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [formInputValue, setFormInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //Evitamos que la pagina se recargue
    alert("Form Event, Data: " + formInputValue);
  };

  //MouseEvent
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  //On key Down
  const handleKeyDown = (e) => {
    console.log(e.key);
  };

  return (
    <>
      <h1>{label}</h1>
      {/* <button onClick={() => alert('Button Event')}>Click me</button> */}
      <br />
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        onChange={handleOnChange}
        id="inputName"
      />
      <button
        onClick={() => {
          setList(list.push(inputValue));
        }}
      >
        Click me
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <br />
      <hr />
      <br />
      <h2>Evento Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formInputValue}
          onChange={(e) => {
            setFormInputValue(e.target.value);
          }}
        />
        <button type="submit">Enviar</button>
      </form>
      <br />
      <hr />
      <br />
      <h2>Evento Mouse</h2>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid red",
        }}
      >
        {hover ? "Mouse Enter" : "Mouse Leave"}
      </div>
      <br />
      <hr />
      <br />
      <h2>On key Down</h2>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Presione cualquier tecla"
      />
    </>
  );
};
