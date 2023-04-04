import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IProduct } from "../models";
import { Markup } from "interweave";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products/" + id)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl">{product.name}</h1>

          <p className="mt-1 text-sm text-gray-500">SKU: #012345</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
              <img
                alt="Tee"
                src={product.images?.[0].base_url}
                className="h-200 w-100 rounded-xl object-cover lg:h-[540px]"
              />

              <div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>

                <span className="ml-1.5 text-xs"> Hover to zoom </span>
              </div>
            </div>

            <ul className="mt-1 flex gap-1">
              <li>
                <img
                  alt="Tee"
                  src={product.images?.[0].base_url}
                  className="h-16 w-16 rounded-md object-cover"
                />
              </li>

              <li>
                <img
                  alt="Tee"
                  src={product.images?.[0].base_url}
                  className="h-16 w-16 rounded-md object-cover"
                />
              </li>

              <li>
                <img
                  alt="Tee"
                  src={product.images?.[0].base_url}
                  className="h-16 w-16 rounded-md object-cover"
                />
              </li>

              <li>
                <img
                  alt="Tee"
                  src={product.images?.[0].base_url}
                  className="h-16 w-16 rounded-md object-cover"
                />
              </li>
            </ul>
          </div>

          <div className="lg:sticky lg:top-0">
            <form className="space-y-4 lg:pt-8">
              <div className="rounded border bg-gray-100 p-4">
                <p className="text-sm">
                  <span className="block">
                    {" "}
                    Pay as low as $3/mo with 0% APR.{" "}
                  </span>

                  <a href="" className="mt-1 inline-block underline">
                    {" "}
                    Find out more{" "}
                  </a>
                </p>
              </div>

              <div>
                <p className="text-xl font-bold">{product.price} đ</p>
              </div>

              <button
                type="submit"
                className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
              >
                Add to cart
              </button>

              <button
                type="button"
                className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
              >
                Notify when on sale
              </button>
            </form>
          </div>

          <div className="lg:col-span-3">
            <div className="prose max-w-none">
              <Markup content={product.description} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
