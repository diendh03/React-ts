import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICate } from "../../../interface/Interface";
import { Table } from "antd";
import { Button, Space, Popconfirm, message } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface IPropCategory {
  categories: ICate[];
  onRemove: (id: string | number) => void;
}
interface DataType {
  key: string | number;
  _id: string | number;
  name: string;
}

const CategoryManagement = (props: IPropCategory) => {
  // console.log(props);
  const columns: ColumnsType<DataType> = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },

    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <Space size="middle">
            <Popconfirm
              title="Mày dám xóa -)) xóa rồi đừng tiếc"
              onConfirm={() => {
                removeCategory(record._id);
              }}
            >
              <Button type="primary" style={{ backgroundColor: "red" }}>
                Delete
              </Button>
            </Popconfirm>

            <Button type="primary" style={{ backgroundColor: "orange" }}>
              <Link to={`/admin/categories/update/${record._id}`}>Update</Link>
            </Button>
          </Space>
        );
      },
    },
  ];

  const [data, setData] = useState<ICate[]>([]);
  useEffect(() => {
    setData(props.categories);
  }, [props]);
  const data1: DataType[] = data.map((item: ICate, index) => {
    return {
      key: item._id,
      ...item,
    };
  });
  const removeCategory = (id: string | number) => {
    props.onRemove(id);
  };

  return (
    <>
      <Button type="primary" style={{ backgroundColor: "#14dbac" }}>
        <Link to={"/admin/categories/add"}>Add New Category</Link>
      </Button>
      <Table columns={columns} dataSource={data1} />;
    </>
  );
};
export default CategoryManagement;
