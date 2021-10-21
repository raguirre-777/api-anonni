import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { AuthModule } from './modules/auth/auth.module';
import * as dotenv from 'dotenv';
import { ChatModule } from './modules/chat/chat.module';
dotenv.config();

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UserModule,
    RoleModule,
    AuthModule,
    ChatModule
  ],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(process.env.PORT);
  }
}
