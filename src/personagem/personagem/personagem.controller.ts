import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PersonagensService } from './personagem.service';
import { CreatePersonagemDto } from '../create-personagem.dto';

@Controller('personagens')
export class PersonagensController {
  constructor(private readonly personagensService: PersonagensService) {}

  @Post()
  async create(@Body() createDto: CreatePersonagemDto) {
    return this.personagensService.create(createDto);
  }

  @Get()
  async findAll() {
    return this.personagensService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.personagensService.findById(id);
  }

  @Put(':id/nome-aventureiro')
  async updateNomeAventureiro(
    @Param('id') id: string,
    @Body('nomeAventureiro') nomeAventureiro: string,
  ) {
    return this.personagensService.updateNomeAventureiro(id, nomeAventureiro);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.personagensService.remove(id);
  }

  @Put(':personagemId/itens/:itemId')
  async adicionarItem(
    @Param('personagemId') personagemId: string,
    @Param('itemId') itemId: string,
  ) {
    return this.personagensService.adicionarItem(personagemId, itemId);
  }

  @Delete(':personagemId/itens/:itemId')
  async removerItem(
    @Param('personagemId') personagemId: string,
    @Param('itemId') itemId: string,
  ) {
    return this.personagensService.removerItem(personagemId, itemId);
  }

  @Get(':personagemId/itens')
  async listarItensPorPersonagem(@Param('personagemId') personagemId: string) {
    return this.personagensService.listarItensPorPersonagem(personagemId);
  }

  @Get(':personagemId/amuleto')
  async buscarAmuleto(@Param('personagemId') personagemId: string) {
    return this.personagensService.buscarAmuleto(personagemId);
  }
}
