import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../interface/Interface";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      ProductDetailPage
      <h3>{product.name}</h3>
    </div>
  );
};

export default ProductDetailPage;
