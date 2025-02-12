"use client";

import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { Level, Nation, Type } from "@/types/api";
import { useVehicleBrowser } from "../contexts/vehicle-browser-context";

function FilterLevel({ levels }: { levels: Level[] }) {
  const { filtersLevel, setFiltersLevel } = useVehicleBrowser();

  const handleCheckboxChange = (value: number, checked: string | boolean) => {
    if (checked) {
      setFiltersLevel([...filtersLevel, value]);
    } else {
      setFiltersLevel(filtersLevel.filter((f) => f !== value));
    }
  };

  return (
    <>
      <NavigationMenuTrigger>Уровень</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-[200px]">
          {levels.map((level) => (
            <li key={level.name}>
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  checked={filtersLevel.includes(level.value)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(level.value, checked)
                  }
                  id={`level-${level.name}`}
                />
                Уровень {level.title}
              </label>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </>
  );
}

function FilterNation({ nations }: { nations: Nation[] }) {
  const { filtersNation, setFiltersNation } = useVehicleBrowser();

  const handleCheckboxChange = (value: string, checked: string | boolean) => {
    if (checked) {
      setFiltersNation([...filtersNation, value]);
    } else {
      setFiltersNation(filtersNation.filter((f) => f !== value));
    }
  };

  return (
    <>
      <NavigationMenuTrigger>Нация</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-[200px]">
          {nations.map((nation) => (
            <li key={nation.name}>
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  checked={filtersNation.includes(nation.name)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(nation.name, checked)
                  }
                  id={`nation-${nation.name}`}
                />
                <Image src={nation.icon} alt="" width={27} height={16} />
                {nation.title}
              </label>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </>
  );
}

function FilterType({ types }: { types: Type[] }) {
  const { filtersType, setFiltersType } = useVehicleBrowser();

  const handleCheckboxChange = (value: string, checked: string | boolean) => {
    if (checked) {
      setFiltersType([...filtersType, value]);
    } else {
      setFiltersType(filtersType.filter((f) => f !== value));
    }
  };
  return (
    <>
      <NavigationMenuTrigger>Класс</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-[200px]">
          {types.map((type) => (
            <li key={type.name}>
              <label className="flex items-center gap-1 cursor-pointer">
                <Checkbox
                  checked={filtersType.includes(type.name)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(type.name, checked)
                  }
                  id={`type-${type.name}`}
                />
                <Image src={type.icon} alt="" width={27} height={27} />
                {type.title}
              </label>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </>
  );
}

export function VehicleFilters() {
  const { filterOptions } = useVehicleBrowser();

  return (
    <NavigationMenu className="mb-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <FilterLevel levels={filterOptions.levels} />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <FilterNation nations={filterOptions.nations} />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <FilterType types={filterOptions.types} />
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
