"use client";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Filter } from "./filter";
import { useVehicleBrowser } from "../contexts/vehicle-browser-context";

export function VehicleFilters() {
  const {
    filterOptions,
    filtersLevel,
    setFiltersLevel,
    filtersNation,
    setFiltersNation,
    filtersType,
    setFiltersType,
  } = useVehicleBrowser();

  return (
    <NavigationMenu className="mb-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Filter
            label="Уровень"
            options={filterOptions.levels}
            selectedValues={filtersLevel}
            onChange={setFiltersLevel}
            renderOption={(option) => `Уровень ${option.title}`}
          />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Filter
            label="Нация"
            options={filterOptions.nations}
            selectedValues={filtersNation}
            onChange={setFiltersNation}
            renderOption={(option) => (
              <>
                <Image src={option.icon} alt="" width={27} height={16} />
                {option.title}
              </>
            )}
          />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Filter
            label="Класс"
            options={filterOptions.types}
            selectedValues={filtersType}
            onChange={setFiltersType}
            renderOption={(option) => (
              <>
                <Image src={option.icon} alt="" width={27} height={27} />
                {option.title}
              </>
            )}
          />
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
