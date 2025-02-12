"use client";

import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
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
    <div>
      <div className="text-lg font-medium mb-2">Уровень</div>
      <ul>
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
              {level.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
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
    <div>
      <div className="text-lg font-medium mb-2">Нация</div>
      <ul>
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
    </div>
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
    <div>
      <div className="text-lg font-medium mb-2">Класс</div>
      <ul>
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
    </div>
  );
}

export function VehicleFilters() {
  const { filterOptions } = useVehicleBrowser();

  return (
    <div className="grid sm:grid-cols-3 mb-8">
      <FilterLevel levels={filterOptions.levels} />
      <FilterNation nations={filterOptions.nations} />
      <FilterType types={filterOptions.types} />
    </div>
  );
}
