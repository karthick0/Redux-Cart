import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "The Alchemist",
    description: "This is a First Book I read",
  },
  {
    id: "p2",
    price: 5,
    title: "Atomic Habits",
    description: "This is a Second Book I read",
  },
  {
    id: "p3",
    price: 9,
    title: "The Pilgrimage",
    description: "This is a Third Book I read",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
