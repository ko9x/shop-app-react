import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const products = [
    {id: Math.random(), title: 'Shoes', price: 22.50, description: 'It\'s like walking on a cloud!'},
    {id: Math.random(), title: 'Sweater', price: 35.99, description: 'I\'m like a human burrito in this thing!'},
    {id: Math.random(), title: 'Sunglasses', price: 13.00, description: 'I finally look as cool as I feel.'},
  ]

  const productList = products.map(product => (
    <ProductItem product={product} key={product.id}/>
  ))
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList}
      </ul>
    </section>
  );
};

export default Products;
