import type { Vehicle } from "@/types/api";
import { VehicleBrowserProvider } from "../contexts/vehicle-browser-context";
import { VehicleFilters } from "./vehicle-filters";
import { VehicleGrid } from "./vehicle-grid";

export function VehicleBrowser({ vehicles }: { vehicles: Vehicle[] }) {
  return (
    <VehicleBrowserProvider vehicles={vehicles}>
      <div className="py-4 sticky top-0 bg-background/50 z-[5] backdrop-blur-lg">
        <div className="container">
          <VehicleFilters />
        </div>
      </div>
      <div className="container">
        <VehicleGrid />
      </div>
    </VehicleBrowserProvider>
  );
}
