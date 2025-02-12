import type { Vehicle, VehicleDto } from "@/types/api";
import { romanize } from "@/utils/romanize";

const url = "https://vortex.korabli.su/api/graphql/glossary/";

export async function getVehicles() {
  const { data } = (await import("./data.json")).default;

  return data.vehicles.map(dtoToVehicle);
}

function dtoToVehicle(dto: VehicleDto): Vehicle {
  const levelString = `${dto.level}`;
  return {
    id: dto.id,
    description: dto.description,
    title: dto.title,
    icons: {
      medium: `https:${dto.icons.medium}`,
      large: `https:${dto.icons.large}`,
    },
    type: {
      name: dto.type.name,
      title: dto.type.title,
      icon: `https:${dto.type.icons.default}`,
    },
    level: {
      name: levelString,
      title: `${romanize(dto.level)}`,
    },
    nation: {
      name: dto.nation.name,
      color: dto.nation.color,
      icon: `https:${dto.nation.icons.large}`,
      title: dto.nation.title,
    },
  };
}
