"use client";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
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
    resetFilters,
  } = useVehicleBrowser();

  return (
    <NavigationMenu>
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
                <span style={{ color: option.color }}>{option.title}</span>
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

        {filtersLevel.length || filtersNation.length || filtersType.length ? (
          <NavigationMenuItem>
            <button
              className={navigationMenuTriggerStyle()}
              onClick={resetFilters}
            >
              Сбросить
            </button>
          </NavigationMenuItem>
        ) : null}

        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
