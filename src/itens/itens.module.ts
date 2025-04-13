import { Module } from '@nestjs/common';
import { ItensMagicosController } from './itens.controller';
import { ItensMagicosService } from './itens.service';

@Module({
  controllers: [ItensMagicosController],
  providers: [ItensMagicosService],
  exports: [ItensMagicosService]
})
export class ItensModule {}
