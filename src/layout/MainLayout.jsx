import { useRef } from "react";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = ({ children }) => {
  const footerDivRef = useRef();
  
  const handleClick = () => {
      footerDivRef.current.innerHTML = "Footer Content Reference";
      footerDivRef.current.setAttribute("class", "footer-new")
  };

  return (
    <div>
      <NavBar />
      {children}
      <div ref={footerDivRef}>footer</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default MainLayout;
