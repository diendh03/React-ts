import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { ICate } from "../../interface/Interface";

interface IPropCategory {
  categories: ICate[];
  onRemove: (id: string | number) => void;
}
const CategoryManagement = (props: IPropCategory) => {
  // console.log(props);
  const [data, setData] = useState<ICate[]>([]);
  useEffect(() => {
    // console.log(props.products);
    setData(props.categories);
  }, [props]);

  const removeCategory = (id: string | number) => {
    props.onRemove(id);
  };
  // console.log(data);
  return (
    <div>
      {/* <button><a href="/admin/products/add">Add New Product</a></button> */}
      <button>
        <Link to={"/admin/categories/add"}>Add New Category</Link>
      </button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((category, index) => {
            return (
              <tr key={category._id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>
                  <button onClick={() => removeCategory(category._id)}>
                    Delete
                  </button>
                  <button>
                    <Link to={`/admin/categories/update/${category._id}`}>
                      Update
                    </Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default CategoryManagement;
