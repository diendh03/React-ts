import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllCategory, getCategory } from "../api/category";
import { getAllProduct } from "../api/product";
import Product from "./products";
import { ICate } from "../interface/Interface";

const FindAllCate = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getAllProduct().then((products: any) => {
      setProduct(products.data.docs);
    });
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        {product?.map((product: any) => (
          <Product key={product._id} data={product} />
        ))}
      </div>
    </>
  );
};

export default FindAllCate;
