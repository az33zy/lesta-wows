import type { Vehicle } from "@/types/api";
import { VehicleBrowserProvider } from "../contexts/vehicle-browser-context";
import { VehicleFilters } from "./vehicle-filters";
import { VehicleGrid } from "./vehicle-grid";

export function VehicleBrowser({ vehicles }: { vehicles: Vehicle[] }) {
  return (
    <VehicleBrowserProvider vehicles={vehicles}>
      <div>
        <VehicleFilters />
        <VehicleGrid />
      </div>
    </VehicleBrowserProvider>
  );
}
