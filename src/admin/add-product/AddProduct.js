import React, { useState } from "react";

import { Form, Button, Col, Row, Container } from "react-bootstrap";
import LayOut from "../../components/common/LayOut";
import axios from "axios";
import swal from "sweetalert";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    image: "",
  });

  const eventHadaler = (e) => {
    if (e.target.name === "image") {
      let reader = new FileReader();

      reader.onload = () => {
        let data = { ...addProduct };
        data[e.target.name] = reader.result;
        setAddProduct(data);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      let data = { ...addProduct };
      data[e.target.name] = e.target.value;
      setAddProduct(data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addProduct);

    const option = {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        Accept: `application/json`,
      },
    };
    axios
      .post("http://localhost:5000/api/v1/product/create", addProduct, option)
      .then((data) => swal("product created", data))
      .catch((err) => swal(err.response.data.message));
  };

  return (
    <LayOut>
      <Container className="my-5">
        <h5>Add your Product</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            aria-required
            onChange={(e) => eventHadaler(e)}
            as={Row}
            className="mb-3"
          >
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="name"
                placeholder="Product Name"
              />
            </Col>
          </Form.Group>

          <Form.Group
            onChange={(e) => eventHadaler(e)}
            as={Row}
            className="mb-3"
          >
            <Form.Label column sm={2}>
              description
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="description"
                placeholder="Product description"
              />
            </Col>
          </Form.Group>

          <Form.Group
            onChange={(e) => eventHadaler(e)}
            as={Row}
            className="mb-3"
          >
            <Form.Label column sm={2}>
              Price
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                name="price"
                placeholder="Product Price"
              />
            </Col>
          </Form.Group>

          <Form.Group
            onChange={(e) => eventHadaler(e)}
            as={Row}
            className="mb-3"
          >
            <Form.Label column sm={2}>
              category
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="category"
                placeholder="Product category"
              />
            </Col>
          </Form.Group>

          <Form.Group
            onChange={(e) => eventHadaler(e)}
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Image
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="file"
                name="image"
                placeholder="Product Image"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Add Product</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </LayOut>
  );
};

export default AddProduct;
