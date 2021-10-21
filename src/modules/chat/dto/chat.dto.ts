import { RoleType } from 'src/modules/role/roletype.enum';
import { ApiProperty } from '@nestjs/swagger';


export class ChatDto {

  id: number;

  @ApiProperty({
    title: 'Mensaje',
    example: 'hola como estas',
  })
  mensaje: string;

  @ApiProperty({
    title: 'ID de usuario que envía mensaje',
    example: '1',
  })
  idSend: string;

  @ApiProperty({
    title: 'ID de usuario que recibe mensaje',
    example: '2',
  })
  idReceive: string;


}
