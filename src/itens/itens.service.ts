import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateItemMagicoDto } from './create-item-magico.dto';
import { ItemMagico } from './interfaces/item-magico.interface';
import { TipoItem } from './item.enum';

@Injectable()
export class ItensMagicosService {
  private itens: ItemMagico[] = [];

  constructor() {}

  async create(createDto: CreateItemMagicoDto): Promise<ItemMagico> {
    const { tipo, forca, defesa } = createDto;

    if (forca === 0 && defesa === 0) {
      throw new BadRequestException('Item Mágico não pode ter força e defesa igual a 0.');
    }

    if (tipo === TipoItem.Arma && defesa !== 0) {
      throw new BadRequestException('Itens do tipo Arma devem ter defesa igual a 0.');
    }

    if (tipo === TipoItem.Armadura && forca !== 0) {
      throw new BadRequestException('Itens do tipo Armadura devem ter força igual a 0.');
    }

    const item: ItemMagico = {
      id: (this.itens.length + 1).toString(),
      ...createDto
    };

    this.itens.push(item);
    return item;
  }

  async findAll(): Promise<ItemMagico[]> {
    return this.itens;
  }

  async findById(id: string): Promise<ItemMagico> {
    const item = this.itens.find(i => i.id === id);
    if (!item) {
      throw new NotFoundException(`Item Mágico com ID ${id} não encontrado`);
    }
    return item;
  }
}
