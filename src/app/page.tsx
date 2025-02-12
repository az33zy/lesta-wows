import { getVehicles } from "@/features/vehicle-browser/api/vehicles-query";
import { VehicleBrowser } from "@/features/vehicle-browser/components/vehicle-browser";

export default async function Home() {
  const vehicles = await getVehicles();

  return (
    <main className="flex-1">
      <h1 className="text-4xl font-medium uppercase mb-4">
        <div className="container">Корабли</div>
      </h1>
      <VehicleBrowser vehicles={vehicles} />
    </main>
  );
}
