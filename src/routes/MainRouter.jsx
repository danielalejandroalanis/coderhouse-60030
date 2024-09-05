import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category, Events, Home, Item } from "../pages";
import { NavBar } from "../components";

export const MainRouter = () => {
  //Parametro de URL: es un dato dinamico que se puede pasar a una ruta
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/category/:id" element={<Category />} />
        {/* <Route path="/events" element={<Events handleClick={() => alert('Click')} />} /> */}
        <Route path="/events" element={<Events label="Events" />} />
      </Routes>
    </BrowserRouter>
  );
};
