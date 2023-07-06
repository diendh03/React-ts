import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IProduct } from "../../../interface/Interface";
import { Link } from "react-router-dom";

interface DataType {
  key: string | number;
  name: string;
  price: number;
}
interface Props {
  products: IProduct[];
  onRemove: (id: string | number) => void;
}

const ProductManagement = (props: Props) => {
  const removeProduct = (id: string | number) => {
    props.onRemove(id);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <Space size="middle">
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => removeProduct(record.key)}
            >
              Remove
            </button>
            <button>
              <Link to={`/admin/products/update/${record.key}`}>Update</Link>
            </button>
          </Space>
        );
      },
    },
  ];

  const data = props.products.map((product) => {
    return {
      key: product._id,
      name: product.name,
      price: product.price,
    };
  });
  return (
    <>
      <button>
        <Link to={"/admin/products/add"}>Add New Product</Link>
      </button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
    </>
  );
};

export default ProductManagement;
