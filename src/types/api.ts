export type VehicleDto = {
  /** added for using as a key in the list */
  id: string;
  title: string;
  description: string;
  icons: {
    /** 870x512 */
    large: string;
    /** 435x256 */
    medium: string;
  };
  level: number;
  type: {
    name: string;
    title: string;
    icons: {
      /** 27x27 */
      default: string;
    };
  };
  nation: {
    name: string;
    title: string;
    color: string;
    icons: {
      small: null;
      medium: null;
      /** 694x426 */
      large: string;
    };
  };
};

export type Nation = {
  name: string;
  title: string;
  color: string;
  icon: string;
};

export type Type = {
  name: string;
  title: string;
  icon: string;
};

export type Level = {
  name: string;
  title: string;
};

export type Vehicle = {
  id: string;
  title: string;
  description: string;
  icons: {
    large: string;
    medium: string;
  };
  level: Level;
  type: Type;
  nation: Nation;
};
