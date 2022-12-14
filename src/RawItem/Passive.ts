import { ItemStats } from './ItemStats';

export interface Passive {
  unique: boolean;
  mythic: boolean;
  name: string;
  effects?: string | null;
  range?: number | null;
  cooldown?: number | string | null;
  stats: ItemStats;
}
