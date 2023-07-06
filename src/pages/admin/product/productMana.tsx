import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../../api/product";
import { Link } from "react-router-dom";

function UserList(props: any) {
  const [usersList, setUsersList] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    getUsersList();
  }, [page]);
  const removeProduct = (id: string | number) => {
    props.onRemove(id);
  };
  const getUsersList = async (kw = keyword, pg = page, pgSize = pageSize) => {
    const params = {
      page: pg,
      pageSize: pgSize,
    };

    const res = await getAllProduct(params);
    setTotalCount(res.data.totalDocs);
    setUsersList(res.data.docs);
    setTotalPages(res.data.totalPages);
    setPageSize(res.data.limit);
  };

  const handleSearch = () => {
    const kw = keyword;
    getUsersList(kw);
  };

  const prevPage = async () => {
    const pg: any = page === 1 ? 1 : page - 1;
    setPage(pg);
    getUsersList(pg);
  };

  const nextPage = async () => {
    const pg: any = page < Math.ceil(totalPages) ? page + 1 : page;
    setPage(pg);
    getUsersList(pg);
  };
  const thCls =
    "px-3 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-left";
  const tdCls = "px-3 py-2 text-sm text-left";

  return (
    <>
      <Link to="/admin/products/add">
        <button
          type="button"
          className="ml-4 align-middle bg-blue-500 hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded inline-block shadow-lg"
        >
          Thêm Product
        </button>
      </Link>

      <div className="px-2 py-5  bg-gray-100">
        <div className="px-4 px-8 py-4 overflow-x-auto">
          <div className="searchbox">
            <div className="flex items-center justify-between">
              <input
                type="text"
                className="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                placeholder="Search..."
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button
                type="button"
                className="ml-4 align-middle bg-blue-500 hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded inline-block shadow-lg"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          <div className="mt-8 inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className={thCls}>Product Name</th>
                  <th className={thCls}>Price </th>
                  <th className={thCls}>Image</th>
                  <th className={thCls}>Action</th>
                </tr>
              </thead>
              <tbody className="customer-list">
                {usersList?.map((item: any, index: any) => {
                  return (
                    <tr key={item._id}>
                      <td className={tdCls}>{item.productName}</td>
                      <td className={tdCls}>{item.price}</td>
                      <td className={tdCls}>
                        <img className="w-20" src={item.image} alt="" />
                      </td>
                      <td className={tdCls}>
                        <button
                          className="ml-4 align-middle bg-red-500 hover:bg-red-600 text-center px-4 py-2 text-white text-sm font-semibold rounded inline-block shadow-lg"
                          onClick={() => removeProduct(item._id)}
                        >
                          Delete
                        </button>
                        <button className="ml-4 align-middle bg-green-500 hover:bg-red-600 text-center px-4 py-2 text-white text-sm font-semibold rounded inline-block shadow-lg">
                          <Link to={`/admin/products/update/${item._id}`}>
                            Update
                          </Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
              <span className="text-xs xs:text-sm text-gray-900">
                Showing {page === 1 ? 1 : pageSize + 1} to {pageSize * page} of{" "}
                {totalCount} Records
              </span>
              <div className="inline-flex mt-2 mt-0">
                <button
                  className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                  onClick={prevPage}
                >
                  Prev
                </button>
                <button
                  className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                  onClick={nextPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
