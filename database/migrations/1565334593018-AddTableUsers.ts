import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddTableUsers1565334593018 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
        name: 'users',
        columns: [
            {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                isNullable: false
            },
            {
                name: 'name',
                type: 'character varying',
                length: '100'
            },
            {
              name: 'email',
              type: 'character varying',
              length: '100'
            },
            {
              name: 'password',
              type: 'character varying',
              length: '250'
            },
            {
                name: 'isActive',
                type: 'boolean',
                default: true
            }
        ]
    }));
}

public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('users');
}

}
