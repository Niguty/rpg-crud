import { Module } from '@nestjs/common';
import { PersonagemModule } from './personagem/personagem/personagem.module';
import { ItensModule } from './itens/itens.module';

@Module({
  imports: [
    PersonagemModule,
    ItensModule,
  ],
})
export class AppModule {}
