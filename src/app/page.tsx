import { getVehicles } from "@/features/vehicle-browser/api/vehicles-query";
import { VehicleBrowser } from "@/features/vehicle-browser/components/vehicle-browser";

export default async function Home() {
  const vehicles = await getVehicles();

  return (
    <main>
      <div className="container">
        <h1 className="text-4xl font-medium uppercase mb-8">Корабли</h1>
        <VehicleBrowser vehicles={vehicles} />
      </div>
    </main>
  );
}
