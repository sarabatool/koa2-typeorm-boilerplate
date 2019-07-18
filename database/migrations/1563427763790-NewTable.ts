import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddTableTourofHeroes1563425940386 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name:'heroes',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false,
                },
                {
                    name: 'name',
                    type: 'character varying',
                    length: '100',
                },
                {
                    name: 'isActive',
                    type: 'boolean',
                    default: true,
                },
            ],
          }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('heroes');
    }

}
