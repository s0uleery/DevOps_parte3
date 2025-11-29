import { Test, TestingModule } from '@nestjs/testing';

import { Usuario } from './usuario.model';
import { AppService } from './app.service';
import { AppController } from './app.controller';

const users: Usuario[] = [
  {
    id: 'abcdefg',
    age: 15,
    name: 'user',
  },
];

describe('#AppController', () => {
  let controller: AppController;
  let service: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getUsers: jest.fn(),
            getUserById: jest.fn(),
            createUser: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = app.get<AppController>(AppController);
    service = app.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getUsers', () => {
    it('should return an user list', async () => {
      const getUsersSpy = jest
        .spyOn(service, 'getUsers')
        .mockResolvedValue(users);

      const result = await controller.getUsers();

      expect(result).toBeDefined();
      expect(result).toStrictEqual(users);
      expect(getUsersSpy).toHaveBeenCalled();
    });
  });

  describe('getUserById', () => {
    it('should return an user with given id', async () => {
      const expectedResult: Usuario = users[0];

      const getUsersSpy = jest
        .spyOn(service, 'getUserById')
        .mockResolvedValue(expectedResult);

      const result = await controller.getUserById(expectedResult.id);

      expect(result).toBeDefined();
      expect(result).toStrictEqual(expectedResult);
      expect(getUsersSpy).toHaveBeenCalled();
    });
  });

  describe('createUser', () => {
    it('should create an user', async () => {
      const expectedResult = users[0];
      const { age, name } = expectedResult;

      const getUsersSpy = jest
        .spyOn(service, 'createUser')
        .mockResolvedValue(expectedResult);

      const result = await controller.createUser(name, age);

      expect(result).toBeDefined();
      expect(result).toStrictEqual(expectedResult);
      expect(getUsersSpy).toHaveBeenCalled();
    });
  });
});
