import { Classe } from '../personagem.enum';
import { ItemMagico } from '../../itens/interfaces/item-magico.interface';

export interface Personagem {
  id?: string;
  nome: string;
  nomeAventureiro: string;
  classe: Classe;
  level: number;
  itensMagicos: ItemMagico[];
  forca: number;
  defesa: number;
} 