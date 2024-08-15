//props: Las props son argumentos que pueden recibir los componentes y que nos permiten pasar información a los mismos.

// const ItemListContainer = ({ label, items }) => {
const ItemListContainer = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.label}</h1>
      <p>Items: </p>
    </div>
  );
};

export default ItemListContainer;
