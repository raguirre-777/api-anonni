import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ChatService } from './chat.service';

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ChatDto } from './dto/Chat.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../role/decorators/role.decorator';
import { RoleGuard } from '../role/guards/role.guard';

//@ApiBearerAuth()
@ApiTags('Mantenedor de Chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly _ChatService: ChatService) { }

  @Get(':id')
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async getChat(@Param('id', ParseIntPipe) id: number): Promise<ChatDto> {
    const chat = await this._ChatService.get(id);
    return chat;
  }

  @Get()
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async getChats(): Promise<ChatDto[]> {
    const chat = await this._ChatService.getAll();
    return chat;
  }

  @Post()
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async createChat(@Body() chat: ChatDto): Promise<ChatDto> {
    const createdChat = await this._ChatService.create(chat);
    return createdChat;
  }

  @Patch(':id')
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async updateChat(@Param('id', ParseIntPipe) id: number, @Body() chat: ChatDto) {
    const updatedChat = await this._ChatService.update(id, chat);
    return true;
  }

  @Delete(':id')
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async deleteChat(@Param('id', ParseIntPipe) id: number) {
    await this._ChatService.delete(id);
    return true;
  }


}
