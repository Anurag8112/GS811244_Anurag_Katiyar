import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { removeStore } from "../../redux/storesSlice";
import { FaTrashAlt } from "react-icons/fa";
import { RxDragHandleHorizontal } from "react-icons/rx";

import "./StorePage.css";

const StoresPage = () => {
  const dispatch = useDispatch();
  const stores = useSelector((state: RootState) => state.stores);

  return (
    <div className="store-grid">
      <div className="table-container">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2">Sr. No</th>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">City</th>
              <th className="border px-4 py-2">State</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((item, index) => (
              <tr key={item.ID} className="hover:bg-gray-100">
                <td className="border px-4 py-2">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => dispatch(removeStore(item.ID))}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
                <td className="border px-4 py-2">
                  <div className="sr-no-container">
                    <RxDragHandleHorizontal className="custom-icon cursor-pointer" />
                    &emsp;
                    <span className="sr-no-text">{index + 1}</span>
                  </div>
                </td>

                <td className="border px-4 py-2">{item.ID}</td>
                <td className="border px-4 py-2">{item.Label}</td>
                <td className="border px-4 py-2">{item.City}</td>
                <td className="border px-4 py-2">{item.State}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoresPage;
