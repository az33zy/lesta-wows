"use client";

import { useVehicleBrowser } from "../contexts/vehicle-browser-context";
import { VehicleCard } from "./vehicle-card";

export function VehicleGrid() {
  const { filteredVehicles } = useVehicleBrowser();

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
      {filteredVehicles.map((vehicle) => (
        <li key={vehicle.id}>
          <VehicleCard vehicle={vehicle} />
        </li>
      ))}
    </ul>
  );
}
