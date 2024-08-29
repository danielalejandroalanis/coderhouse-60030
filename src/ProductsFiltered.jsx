import { useProducts } from "./hooks";

export const ProductsFiltered = () => {
  const { productsData } = useProducts();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        <ComponenteFiltrado products={productsData} />
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
