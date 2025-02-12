import Image from "next/image";
import type { Vehicle } from "@/types/api";
import { VehicleDialog } from "./vehicle-dialog";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <VehicleDialog vehicle={vehicle}>
      <button className="block w-full relative hover:bg-black/25 hover:border-white/25 border border-transparent px-4 py-3 transition-colors group duration-300">
        <div className="relative z-0">
          <Image
            src={vehicle.nation.icon}
            alt=""
            width={694}
            height={426}
            className="absolute top-[5%] left-0 w-full h-[90%] object-contain opacity-50 -z-[1] group-hover:opacity-90 transition-opacity duration-300"
          />
          <Image
            src={vehicle.icons.medium}
            alt=""
            width={435}
            height={256}
            className="w-full origin-bottom group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-0 left-0 flex gap-1 items-center drop-shadow">
            <Image src={vehicle.type.icon} alt="" width={27} height={27} />
            <span className="font-bold ">{vehicle.level.title}</span>
          </div>
          <div className="absolute bottom-0 left-0 uppercase font-bold text-xl w-full text-right">
            {vehicle.title}
          </div>
        </div>
      </button>
    </VehicleDialog>
  );
}
