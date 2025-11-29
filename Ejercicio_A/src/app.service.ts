import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Usuario } from './usuario.model';
import { UsuarioEntity } from './database/entities/usuario.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly userRepo: Repository<UsuarioEntity>,
  ) {}

  async getUsers(): Promise<Usuario[]> {
    return this.userRepo.find();
  }

  async getUserById(id: string): Promise<Usuario> {
    return this.userRepo.findOne({ where: { id } });
  }

  async createUser(name: string, age: number): Promise<Usuario> {
    const user = this.userRepo.create({
      name,
      age,
    });
    await this.userRepo.insert(user);
    return user;
  }
}
