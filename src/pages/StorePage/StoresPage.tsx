import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addStore, removeStore } from "../../redux/storesSlice";
import { FaTrashAlt } from "react-icons/fa";
import "./StorePage.css";

const StoresPage = () => {
  const storeData = [
    {
      SeqNo: 1,
      ID: "ST035",
      Label: "San Francisco Bay Trends",
      City: "San Francisco",
      State: "CA",
    },
    {
      SeqNo: 2,
      ID: "ST046",
      Label: "Phoenix Sunwear",
      City: "Phoenix",
      State: "AZ",
    },
    {
      SeqNo: 3,
      ID: "ST064",
      Label: "Dallas Ranch Supply",
      City: "Dallas",
      State: "TX",
    },
    {
      SeqNo: 4,
      ID: "ST066",
      Label: "Atlanta Outfitters",
      City: "Atlanta",
      State: "GA",
    },
    {
      SeqNo: 5,
      ID: "ST073",
      Label: "Nashville Melody Music Store",
      City: "Nashville",
      State: "TN",
    },
    {
      SeqNo: 6,
      ID: "ST074",
      Label: "New York Empire Eats",
      City: "New York",
      State: "NY",
    },
    {
      SeqNo: 7,
      ID: "ST091",
      Label: "Denver Peaks Outdoor",
      City: "Denver",
      State: "CO",
    },
    {
      SeqNo: 8,
      ID: "ST094",
      Label: "Philadelphia Liberty Market",
      City: "Philadelphia",
      State: "PA",
    },
    {
      SeqNo: 9,
      ID: "ST097",
      Label: "Boston Harbor Books",
      City: "Boston",
      State: "MA",
    },
    {
      SeqNo: 10,
      ID: "ST101",
      Label: "Austin Vibe Co.",
      City: "Austin",
      State: "TX",
    },
    {
      SeqNo: 11,
      ID: "ST131",
      Label: "Los Angeles Luxe",
      City: "Los Angeles",
      State: "CA",
    },
    {
      SeqNo: 12,
      ID: "ST150",
      Label: "Houston Harvest Market",
      City: "Houston",
      State: "TX",
    },
    {
      SeqNo: 13,
      ID: "ST151",
      Label: "Portland Evergreen Goods",
      City: "Portland",
      State: "OR",
    },
    {
      SeqNo: 14,
      ID: "ST156",
      Label: "Chicago Charm Boutique",
      City: "Chicago",
      State: "IL",
    },
    {
      SeqNo: 15,
      ID: "ST163",
      Label: "Las Vegas Neon Treasures",
      City: "Las Vegas",
      State: "NV",
    },
    {
      SeqNo: 16,
      ID: "ST175",
      Label: "Seattle Skyline Goods",
      City: "Seattle",
      State: "WA",
    },
    {
      SeqNo: 17,
      ID: "ST176",
      Label: "Miami Breeze Apparel",
      City: "Miami",
      State: "FL",
    },
    {
      SeqNo: 18,
      ID: "ST177",
      Label: "San Diego Wave Surf Shop",
      City: "San Diego",
      State: "CA",
    },
    {
      SeqNo: 19,
      ID: "ST193",
      Label: "Charlotte Queen’s Closet",
      City: "Charlotte",
      State: "NC",
    },
    {
      SeqNo: 20,
      ID: "ST208",
      Label: "Detroit Motor Gear",
      City: "Detroit",
      State: "MI",
    },
  ];

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
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">City</th>
            </tr>
          </thead>
          <tbody>
            {storeData.map((item, index) => (
              <tr key={item.ID} className="hover:bg-gray-100">
                <td className="border px-4 py-2">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrashAlt />
                  </button>
                </td>
                <td className="border px-4 py-2">{index + 1}</td>
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
