import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ItemMagicoDocument = ItemMagico & Document;

export enum TipoItem {
  Arma = 'Arma',
  Armadura = 'Armadura',
  Amuleto = 'Amuleto',
}

@Schema()
export class ItemMagico {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true, enum: TipoItem })
  tipo: TipoItem;

  @Prop({
    required: true,
    min: 0,
    max: 10,
    validate: {
      validator: function (this: ItemMagico, v: number) {
        return !(this.tipo === TipoItem.Armadura && v > 0);
      },
      message: 'Força deve ser 0 para Armaduras.',
    },
  })
  forca: number;

  @Prop({
    required: true,
    min: 0,
    max: 10,
    validate: {
      validator: function (this: ItemMagico, v: number) {
        return !(this.tipo === TipoItem.Arma && v > 0);
      },
      message: 'Defesa deve ser 0 para Armas.',
    },
  })
  defesa: number;

  @Prop({ type: Types.ObjectId, ref: 'Personagem' })
  personagem?: Types.ObjectId;
}

export const ItemMagicoSchema = SchemaFactory.createForClass(ItemMagico);