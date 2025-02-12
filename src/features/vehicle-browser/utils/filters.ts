import type { Level, Nation, Type, Vehicle } from "@/types/api";

export function extractFilterItems(vehicles: Vehicle[]) {
  const nations = new Map<string, Nation>();
  const types = new Map<string, Type>();
  const levels = new Map<string, Level>();

  for (const vehicle of vehicles) {
    if (!nations.has(vehicle.nation.name)) {
      nations.set(vehicle.nation.name, vehicle.nation);
    }

    if (!types.has(vehicle.type.name)) {
      types.set(vehicle.type.name, vehicle.type);
    }

    if (!levels.has(vehicle.level.name)) {
      levels.set(vehicle.level.name, vehicle.level);
    }
  }

  return {
    nations: Array.from(nations.values()),
    types: Array.from(types.values()),
    levels: Array.from(levels.values()).toSorted((a, b) => +a.name - +b.name),
  };
}

export function filterVehicles(
  vehicles: Vehicle[],
  filters: {
    nations: string[];
    types: string[];
    levels: string[];
  },
) {
  const nationSet = new Set(filters.nations);
  const typeSet = new Set(filters.types);
  const levelSet = new Set(filters.levels);

  return vehicles.filter(
    (v) =>
      (nationSet.size === 0 || nationSet.has(v.nation.name)) &&
      (typeSet.size === 0 || typeSet.has(v.type.name)) &&
      (levelSet.size === 0 || levelSet.has(v.level.name)),
  );
}
