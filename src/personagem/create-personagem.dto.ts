import { IsEnum, IsInt, IsNotEmpty, IsString, Max, Min, ValidateIf } from 'class-validator';
import { Classe } from './personagem.enum';

export class CreatePersonagemDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  nomeAventureiro: string;

  @IsNotEmpty()
  @IsEnum(Classe)
  classe: Classe;

  @IsInt()
  @Min(0)
  @Max(10)
  @ValidateIf((o) => o.forca + o.defesa <= 10)
  forca: number;

  @IsInt()
  @Min(0)
  @Max(10)
  @ValidateIf((o) => o.forca + o.defesa <= 10)
  defesa: number;
} 