import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllCategory, getCategory } from "../api/category";

import Product from "./ProductItem";

const FindCateById = (props: any) => {
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
