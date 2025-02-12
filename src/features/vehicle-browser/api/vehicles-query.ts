import { api } from "@/lib/api-client";
import type { Vehicle, VehicleDto } from "@/types/api";
import { romanize } from "@/utils/romanize";

const url = "https://vortex.korabli.su/api/graphql/glossary/";

const vehiclesQuery = `
query Vehicles($languageCode: String = "ru") {
  vehicles(lang: $languageCode) {
    id # added for using as a key in the list
    title
    description
    icons {
      large
      medium
    }
    level
    type {
      name
      title
      icons {
        default
      }
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
}
`;

export async function getVehicles() {
  const { data } = await api.query<{ data: { vehicles: VehicleDto[] } }>(
    url,
    vehiclesQuery,
  );

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
