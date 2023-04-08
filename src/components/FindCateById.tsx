import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllCategory, getCategory } from "../api/category";
import { getAllProduct } from "../api/product";
import Product from "./products";
import { ICate } from "../interface/Interface";

const FindCateById = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getCategory(id).then(({ data }) => {
        setCategory(data);
        setProduct(data.products);
      });
    }
  }, [id]);

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

export default FindCateById;