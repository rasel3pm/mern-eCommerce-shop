import React from "react";

const SiProduct = (props) => {
  return (
    <div>
      <div className="product_im">
        <img src={props.avater} />
      </div>
      <div className="title">
        <h4>{props.name}</h4>
        <span>{props.price}</span>
      </div>
      <div className="des">
        <p>{props.description}</p>
      </div>
      <div>
        <button>Buy </button>
      </div>
    </div>
  );
};

export default SiProduct;
