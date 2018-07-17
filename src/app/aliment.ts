import { Category } from './category';

export interface Aliment {
    id: number;
    name: string;
    category: Category;
    energy: number;
    ig: number;
    protein: number;
    carb: number;
    sugar: number;
    lipid: number;
    fibre: number;
    salt: number;
    cg: number;

}
