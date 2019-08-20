import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import * as bcrypt from 'bcryptjs';


@Entity('users1')
export class Users {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'character varying',
    })
    public name: string;

    
    @Column({
        type: 'character varying',
        unique: true
    })
    public email: string;

    
    @Column({
        type: 'character varying',
    })
    public password: string;

    hashPassword() {
        return bcrypt.hashSync(this.password, 10);
      }
    
      checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
      }

}