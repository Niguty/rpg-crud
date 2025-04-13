import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreatePersonagemDto } from '../create-personagem.dto';
import { Personagem } from '../interfaces/personagem.interface';
import { ItensMagicosService } from '../../itens/itens.service';
import { TipoItem } from '../../itens/item.enum';

@Injectable()
export class PersonagensService {
  private personagens: Personagem[] = [];

  constructor(private readonly itensService: ItensMagicosService) {}

  async create(createDto: CreatePersonagemDto): Promise<Personagem> {
    const { forca, defesa } = createDto;

    if (forca + defesa > 10) {
      throw new BadRequestException('A soma de força e defesa não pode ultrapassar 10.');
    }

    const personagem: Personagem = {
      id: (this.personagens.length + 1).toString(),
      ...createDto,
      level: 1,
      itensMagicos: []
    };

    this.personagens.push(personagem);
    return personagem;
  }

  async findAll(): Promise<Personagem[]> {
    return this.personagens;
  }

  async findById(id: string): Promise<Personagem> {
    const personagem = this.personagens.find(p => p.id === id);
    if (!personagem) {
      throw new NotFoundException(`Personagem com ID ${id} não encontrado`);
    }
    return personagem;
  }

  async updateNomeAventureiro(id: string, nomeAventureiro: string): Promise<Personagem> {
    const personagem = await this.findById(id);
    personagem.nomeAventureiro = nomeAventureiro;
    return personagem;
  }

  async remove(id: string): Promise<void> {
    const index = this.personagens.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Personagem com ID ${id} não encontrado`);
    }
    this.personagens.splice(index, 1);
  }

  async adicionarItem(personagemId: string, itemId: string) {
    const personagem = await this.findById(personagemId);
    const item = await this.itensService.findById(itemId);

    if (item.personagem) {
      throw new BadRequestException('Item já está vinculado a outro personagem.');
    }

    if (item.tipo === TipoItem.Amuleto) {
      const temAmuleto = personagem.itensMagicos.some(i => i.tipo === TipoItem.Amuleto);
      if (temAmuleto) {
        throw new BadRequestException('Personagem já possui um amuleto.');
      }
    }

    item.personagem = personagemId;
    personagem.itensMagicos.push(item);

    return personagem;
  }

  async removerItem(personagemId: string, itemId: string) {
    const personagem = await this.findById(personagemId);
    const itemIndex = personagem.itensMagicos.findIndex(i => i.id === itemId);

    if (itemIndex === -1) {
      throw new BadRequestException('Item não encontrado no personagem.');
    }

    const item = await this.itensService.findById(itemId);
    item.personagem = undefined;
    personagem.itensMagicos.splice(itemIndex, 1);

    return personagem;
  }

  async buscarAmuleto(personagemId: string) {
    const personagem = await this.findById(personagemId);
    return personagem.itensMagicos.find(i => i.tipo === TipoItem.Amuleto);
  }

  async listarItensPorPersonagem(personagemId: string) {
    const personagem = await this.findById(personagemId);
    return personagem.itensMagicos;
  }
}
