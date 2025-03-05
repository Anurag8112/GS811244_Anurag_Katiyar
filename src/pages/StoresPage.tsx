import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addStore, removeStore } from "../redux/storesSlice";

const StoresPage = () => {
  const [storeName, setStoreName] = useState("");
  const stores = useSelector((state: RootState) => state.stores.stores);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Stores</h2>
      <input
        type="text"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
        placeholder="Enter Store Name"
      />
      <button
        onClick={() =>
          dispatch(addStore({ id: Date.now().toString(), name: storeName }))
        }
      >
        Add Store
      </button>
      <ul>
        {stores.map((store) => (
          <li key={store.id}>
            {store.name}{" "}
            <button onClick={() => dispatch(removeStore(store.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoresPage;
