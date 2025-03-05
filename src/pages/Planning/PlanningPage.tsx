import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./PlanningPage.css"; // Import the new CSS file

const PlanningPage = () => {
  const columnDefs: ColDef[] = [
    { field: "store", headerName: "Store" },
    { field: "sku", headerName: "SKU" },
    { field: "salesUnits", headerName: "Sales Units", editable: true },
    { field: "salesDollars", headerName: "Sales Dollars" },
    { field: "gmDollars", headerName: "GM Dollars" },
    { field: "gmPercentage", headerName: "GM %" },
  ];

  return (
    <div className="ag-theme-alpine planning-grid">
      <AgGridReact rowData={[]} columnDefs={columnDefs} />
    </div>
  );
};

export default PlanningPage;
