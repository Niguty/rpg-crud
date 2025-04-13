import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItensMagicosService } from './itens.service';
import { CreateItemMagicoDto } from './create-item-magico.dto';

@Controller('itens-magicos')
export class ItensMagicosController {
  constructor(private readonly itensMagicosService: ItensMagicosService) {}

  @Post()
  async create(@Body() createDto: CreateItemMagicoDto) {
    return this.itensMagicosService.create(createDto);
  }

  @Get()
  async findAll() {
    return this.itensMagicosService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.itensMagicosService.findById(id);
  }
}
