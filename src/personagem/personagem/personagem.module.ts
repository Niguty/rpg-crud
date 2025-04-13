import { Module } from '@nestjs/common';
import { PersonagensController } from './personagem.controller';
import { PersonagensService } from './personagem.service';
import { ItensModule } from '../../itens/itens.module';

@Module({
  imports: [ItensModule],
  controllers: [PersonagensController],
  providers: [PersonagensService]
})
export class PersonagemModule {}
