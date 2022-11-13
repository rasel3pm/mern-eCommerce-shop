import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
import axios from "axios";
import SiProduct from "./SiProduct";

const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/product/")
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      all product
      {/* {data.map((item) => (
        <SiProduct
          avater={item.avater}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))} */}
    </div>
  );
};

export default Product;
