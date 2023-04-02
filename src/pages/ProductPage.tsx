// import React from "react";
import { useState, useEffect } from "react";
import { deleteProduct } from "../api/product";
import { IProduct } from "../interface/Interface";
interface IPropProduct {
  products: IProduct[];
  onRemove: (id: number | string) => void;
}
const ProductPage = (props: IPropProduct) => {
  //   console.log(props.products);
  // console.log(props.onRemove);
  // return;
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    setData(props.products);
  }, [props]);
  const removeProduct = (id: string | number) => {
    // fetch(" http://localhost:3000/products/" + id, {
    //   method: "DELETE",
    // })

    props.onRemove(id);
  };
  return (
    <div>
      <h1>ProductPage</h1>

      {data.map((product) => {
        //   console.log(product.productName);
        return (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <h3>
              <button>Deltail</button>
            </h3>
            <button onClick={() => removeProduct(product._id)}>Remove </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage;
