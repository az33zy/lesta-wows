"use client";

import { createContext, use, useState } from "react";
import type { Vehicle } from "@/types/api";

type VehicleBrowserContextType = {
  vehicles: Vehicle[];
  filtersNation: string[];
  filtersType: string[];
  filtersLevel: number[];
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
  // const filteredVehicles = vehicles.filter((v) => v.level === 5);
  const filteredVehicles = vehicles.filter((v) => true);

  return (
    <VehicleBrowserContext.Provider
      value={{
        vehicles,

        filtersNation: [],
        filtersType: [],
        filtersLevel: [],

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
