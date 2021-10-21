import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';
import { Inject } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config: ConfigService) {
            return {
                connectString: 'postgres://dfzghwdttvqonk:eefb9ed974578b41b1bedfcfe028d528574b38c2af5540d32bb9733212fae450@ec2-34-232-245-127.compute-1.amazonaws.com:5432/d3i4cadsl7aeb6', type: 'postgres',
                ssl: {
                    rejectUnauthorized: false
                },
                host: process.env.DB_HOST,
                username: process.env.DB_USERNAME,
                port: 5432,
                database: process.env.DB_NAME,
                password: process.env.DB_PASSWORD,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
            } as ConnectionOptions;
        },
    }),
];
