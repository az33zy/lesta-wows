import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Vehicle } from "@/types/api";

type VehicleDialogProps = {
  children: React.ReactNode;
  vehicle: Vehicle;
};

export function VehicleDialog({ children, vehicle }: VehicleDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{vehicle.title}</DialogTitle>
          <DialogDescription>
            <span>Уровень {vehicle.level.title}</span>
            <span> / </span>
            <span style={{ color: vehicle.nation.color }}>
              {vehicle.nation.title}
            </span>
            <span> / </span>
            <span>{vehicle.type.title}</span>
          </DialogDescription>
        </DialogHeader>
        <div>
          <Image
            src={vehicle.icons.large}
            alt=""
            width={870}
            height={512}
            className="w-full origin-bottom"
          />
        </div>
        <div>{vehicle.description}</div>
        {/* <DialogFooter></DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
