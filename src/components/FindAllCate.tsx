import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllCategory, getCategory } from "../api/category";
import { getAllProduct } from "../api/product";
import Product from "./products";
import { ICate } from "../interface/Interface";
import { Input, Space } from "antd";
const { Search } = Input;
import { Pagination } from "antd";
interface Props {
  onKeyWord: (e: any) => void;
}
const FindAllCate = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();
  const onSearch = (e: any) => {
    setKeyword(e.target.value);
  };
  useEffect(() => {
    getAllProduct("", keyword).then((products: any) => {
      setProduct(products.data.docs);
    });
  }, [keyword]);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;
  const currentProducts = product.slice(startIndex, endIndex);
  return (
    <>
      <div style={{ paddingTop: "20px" }}>
        <label htmlFor="">Tim Kiem </label>
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            onChange={onSearch}
            style={{ width: 200 }}
          />
        </Space>
      </div>

      <div className="flex flex-wrap">
        {currentProducts?.map((product: any) => (
          <Product key={product._id} data={product} />
        ))}
      </div>
      <div className="flex  justify-center ">
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          pageSize={3}
          total={product.length}
        />
      </div>
    </>
  );
};

export default FindAllCate;
