import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ChatRepository } from './chat.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './chat.entity';
import { ChatDto } from './dto/chat.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatRepository)
    private readonly _ChatRespository: ChatRepository,
  ) { }

  async get(id: number): Promise<ChatDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const pro: Chat = await this._ChatRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!pro) {
      throw new NotFoundException();
    }

    return pro;
  }

  async getAll(): Promise<ChatDto[]> {
    const provs: Chat[] = await this._ChatRespository.find({
      where: { status: 'ACTIVE' },
    });

    return provs;
  }

  async create(prov: ChatDto): Promise<ChatDto> {
    const savedProv: Chat = await this._ChatRespository.save(prov);
    return savedProv;
  }

  async update(id: number, prov: ChatDto): Promise<void> {
    await this._ChatRespository.update(id, prov);
  }

  async delete(id: number): Promise<void> {
    const provExist = await this._ChatRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!provExist) {
      throw new NotFoundException();
    }

    await this._ChatRespository.update(id, { status: 'INACTIVE' });
  }

}
