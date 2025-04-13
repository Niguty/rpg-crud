import { TipoItem } from '../item.enum';

export interface ItemMagico {
  id?: string;
  nome: string;
  tipo: TipoItem;
  forca: number;
  defesa: number;
  personagem?: string;
} 