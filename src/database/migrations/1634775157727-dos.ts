import {MigrationInterface, QueryRunner} from "typeorm";

export class dos1634775157727 implements MigrationInterface {
    name = 'dos1634775157727'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat" ADD "idSend" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chat" ADD "idReceive" character varying(30) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat" DROP COLUMN "idReceive"`);
        await queryRunner.query(`ALTER TABLE "chat" DROP COLUMN "idSend"`);
    }

}
