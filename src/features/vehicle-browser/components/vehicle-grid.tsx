"use client";

import { type GridComponents, VirtuosoGrid } from "react-virtuoso";
import { useVehicleBrowser } from "../contexts/vehicle-browser-context";
import { VehicleCard } from "./vehicle-card";

const gridComponents: GridComponents = {
  List: ({ ref, children, ...props }) => (
    <div ref={ref} {...props} className="grid sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  ),
};

export function VehicleGrid() {
  const { filteredVehicles } = useVehicleBrowser();

  return (
    <VirtuosoGrid
      data={filteredVehicles}
      useWindowScroll
      components={gridComponents}
      itemContent={(_, data) => <VehicleCard vehicle={data} />}
    />
  );
}
