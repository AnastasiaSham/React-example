import React from "react";
import Title from "./title";
import Gallery from "./map";
import Description from "./description";

function ProductPage({ product }) {
  return (
    <section>
      <Title>{product.name}</Title>

      <div style={{ display: "flex" }}>
        <Gallery src={product.src} alt={product.name} />
      </div>
      <Description text={product.description} />
    </section>
  );
}

export default ProductPage;
