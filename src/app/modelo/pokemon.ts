export type Sprites = {
  front_default: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}
export type Stat = {
  base_stat: number;
  stat: {
    name: string;
  }
}
export interface Pokemon {
  name: string;
  order: number;
  sprites: Sprites;
  stats: Array<Stat>;
}
