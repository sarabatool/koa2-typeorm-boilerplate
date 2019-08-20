import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UsersList1566216492745 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'usersList',
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
                        length: '100'
                    },
                    {
                        name: 'email',
                        type: 'character varying',
                        length: '100',
                        isUnique: true
                    },
                    {
                        name: 'password',
                        type: 'character varying',
                        length: '100'

                    }

                ]

            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('usersList');
    }

}
