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
  const { filteredVehicles, resetFilters } = useVehicleBrowser();

  if (filteredVehicles.length === 0) {
    return (
      <div className="text-xl mt-12">
        <p className="opacity-75">Нет результатов</p>
        <p className="mt-2">
          Попробуйте{" "}
          <button
            className="underline underline-offset-4"
            onClick={resetFilters}
          >
            сбросить фильтры
          </button>
        </p>
      </div>
    );
  }

  return (
    <VirtuosoGrid
      data={filteredVehicles}
      useWindowScroll
      components={gridComponents}
      itemContent={(_, data) => <VehicleCard vehicle={data} />}
    />
  );
}
