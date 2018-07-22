import { Portion } from 'src/app/portion';

export interface Recette {
    id?: number;
    name: string;
    comment?: string;
    energy?: number;
    cg: number;
    protein?: number;
    carb?: number;
    lipid?: number;
    fibre?: number;
    sugar?: number;
    salt?: number;
    portions: Portion[];
}
