import { useState } from "react";
import allProducts from "./data";
function App() {
  const [products, setProducts] = useState(allProducts);
  console.log(products);

  // delete product
  const deleteProduct = (id) => {
    const filteredProduct = products.filter((product) => {
      return product.id !== id;
    });

    setProducts(filteredProduct);
  };

  const filterByBrand = (brand) => {
    setProducts(allProducts);
    if (brand == "all") {
      setProducts(allProducts);
    } else {
      const filterBrand = allProducts.filter((product) => {
        return product.brand == brand;
      });

      setProducts(filterBrand)
    }
  };
  const filterByPrice = (price) => {
    setProducts(allProducts);
    if (price == "all") {
      setProducts(allProducts);
    } else {
      const filterPrice = allProducts.filter((product) => {
        return product.price == price;
      });

      setProducts(filterPrice)
    }
  };

  return (
    <div>
      <div className="filter-container">
        <select onChange={(e) => filterByBrand(e.target.value)} className="select-brand">
          <option value="all">All</option>;
          {[...new Set(allProducts.map((product) => {
            return product.brand;
          }))].map((brand) => {
            return (
              <option key={Math.random() * new Date().getMilliseconds} value={brand}>
                {brand}
              </option>
            )
          })}
        </select>
        <select onChange={(e) => filterByPrice(e.target.value)} className="select-brand">
          <option value="all">All</option>;
          {[...new Set(allProducts.map((product) => {
            return product.price;
          }))].map((price) => {
            return (
              <option key={Math.random() * new Date().getMilliseconds} value={price}>
                ${price}
              </option>
            )
          })}
        </select>
      </div>
      <ul className="container">
        {products.map((product) => {
          const { id, title, thumbnail, brand, price, rating, description } =
            product;
          return (
            <li key={id}>
              <img src={thumbnail} alt={description} />
              <h2>{title}</h2>
              <h3>
                <b>Brand :</b> {brand}{" "}
              </h3>
              <p>
                <b>Price: </b>${price}
              </p>
              <p>
                <b>Rating: </b>
                {rating}
              </p>
              <p>
                <b>Decs: </b>
                {description}
              </p>
              <button onClick={() => deleteProduct(id)} className="del-btn">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
