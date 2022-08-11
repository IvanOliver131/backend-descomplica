import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateStudentTable1660130709884 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'students',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('students');
    }

}
