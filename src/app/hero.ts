import { Item } from './item';

export interface Hero {
    id: number;
    name: string;
    item?: Item;
    money: number;
}