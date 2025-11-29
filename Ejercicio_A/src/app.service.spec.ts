import { Repository } from 'typeorm';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Usuario } from './usuario.model';
import { AppService } from './app.service';
import { UsuarioEntity } from './database/entities/usuario.entity';

const users: Usuario[] = [
  {
    id: 'abcdefg',
    age: 15,
    name: 'user',
  },
];

describe('#AppService', () => {
  let service: AppService;
  let repo: Repository<UsuarioEntity>;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: getRepositoryToken(UsuarioEntity),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            insert: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AppService>(AppService);
    repo = module.get<Repository<UsuarioEntity>>(
      getRepositoryToken(UsuarioEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an user list', async () => {
    const findSpy = jest.spyOn(repo, 'find').mockResolvedValue(users);

    const result = await service.getUsers();

    expect(result).toBeDefined();
    expect(result).toStrictEqual(users);
    expect(findSpy).toHaveBeenCalled();
  });

  it('should return an user with his id', async () => {
    const { id } = users[0];

    const findOneSpy = jest.spyOn(repo, 'findOne').mockResolvedValue(users[0]);

    const result = await service.getUserById(id);

    expect(result).toBeDefined();
    expect(result).toStrictEqual(users[0]);
    expect(findOneSpy).toHaveBeenCalled();
  });

  it('should create an user with the params', async () => {
    const { age, name } = users[0];

    jest.spyOn(repo, 'create').mockImplementation((vars) => {
      expect(vars).toBeDefined();
      expect(vars).toHaveProperty('name', name);
      expect(vars).toHaveProperty('age', age);

      return {
        id: users[0].id,
        age,
        name,
      };
    });

    const insertSpy = jest.spyOn(repo, 'insert').mockResolvedValue(null);

    const result = await service.createUser(name, age);

    expect(result).toBeDefined();
    expect(result).toStrictEqual(users[0]);
    expect(insertSpy).toHaveBeenCalled();
  });
});
