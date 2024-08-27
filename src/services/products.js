import axios from "axios";

export async function getAllProducts() {
  return await axios.get("https://dummyjson.com/products");
}
