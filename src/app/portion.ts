import { Aliment } from './aliment';
import { Recette } from './recette';

export interface Portion {
    id?: number;
    quantity: number;
    aliment: Aliment;
    recette?: Recette;
}
