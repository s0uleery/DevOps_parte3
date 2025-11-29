import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Usuario } from '../../usuario.model';

@Entity()
export class UsuarioEntity extends Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('integer')
  age: number;
}
