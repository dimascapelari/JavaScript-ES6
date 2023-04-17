// 4 map
const products = [
  { name: "Camiseta", price: 10.99, category: "Roupas" },
  { name: "Chaleira Elétrica", price: 49.99, category: "Eletro" },
  { name: "Fogão", price: 400.0, category: "Eletro" },
  { name: "Calça Jeans", price: 50.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.promocao = true;
  }
});

console.log(products);
