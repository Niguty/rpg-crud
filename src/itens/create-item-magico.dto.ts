import { IsEnum, IsInt, IsNotEmpty, IsString, Max, Min, ValidateIf } from 'class-validator';
import { TipoItem } from './item.enum';

export class CreateItemMagicoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEnum(TipoItem)
  tipo: TipoItem;

  @IsInt()
  @Min(0)
  @Max(10)
  @ValidateIf((o) => {
    if (o.tipo === TipoItem.Armadura) return o.forca === 0;
    return o.forca + o.defesa > 0;
  })
  forca: number;

  @IsInt()
  @Min(0)
  @Max(10)
  @ValidateIf((o) => {
    if (o.tipo === TipoItem.Arma) return o.defesa === 0;
    return o.forca + o.defesa > 0;
  })
  defesa: number;
} 