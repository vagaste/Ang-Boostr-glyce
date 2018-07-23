import { Aliment } from './aliment';
import { Recette } from './recette';

export interface Portion {
    id?: number;
    quantity: number;
    fk_idaliment: number;
    fk_idrecette?: number;
}
