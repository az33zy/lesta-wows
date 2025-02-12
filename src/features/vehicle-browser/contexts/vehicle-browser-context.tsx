"use client";

import { createContext, use, useMemo, useState } from "react";
import type { Vehicle } from "@/types/api";
import { extractFilterItems, filterVehicles } from "../utils/filters";

type VehicleBrowserContextType = {
  vehicles: Vehicle[];

  filterOptions: ReturnType<typeof extractFilterItems>;

  filtersNation: string[];
  filtersType: string[];
  filtersLevel: number[];

  setFiltersNation: (values: string[]) => void;
  setFiltersType: (values: string[]) => void;
  setFiltersLevel: (values: number[]) => void;

  filteredVehicles: Vehicle[];
};

const VehicleBrowserContext = createContext<
  VehicleBrowserContextType | undefined
>(undefined);

export function VehicleBrowserProvider({
  vehicles,
  children,
}: {
  vehicles: Vehicle[];
  children: React.ReactNode;
}) {
  const [filtersNation, setFiltersNation] = useState<string[]>([]);
  const [filtersType, setFiltersType] = useState<string[]>([]);
  const [filtersLevel, setFiltersLevel] = useState<number[]>([]);

  const filterOptions = useMemo(() => extractFilterItems(vehicles), [vehicles]);

  const filteredVehicles = useMemo(
    () =>
      filterVehicles(vehicles, {
        nations: filtersNation,
        types: filtersType,
        levels: filtersLevel,
      }),
    [vehicles, filtersNation, filtersType, filtersLevel],
  );

  return (
    <VehicleBrowserContext.Provider
      value={{
        vehicles,

        filterOptions,

        filtersNation,
        filtersType,
        filtersLevel,

        setFiltersNation,
        setFiltersType,
        setFiltersLevel,

        filteredVehicles,
      }}
    >
      {children}
    </VehicleBrowserContext.Provider>
  );
}

export function useVehicleBrowser() {
  const context = use(VehicleBrowserContext);

  if (context === undefined) {
    throw new Error(
      "useVehicleBrowser must be used within a VehicleBrowserProvider",
    );
  }

  return context;
}
