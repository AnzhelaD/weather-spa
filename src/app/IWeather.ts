export interface Country {
  name: string;
  favorite: boolean;
}
export interface CountryData {
  name: string;
  weather: {
    description: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
  };
  visibility: number;
}
