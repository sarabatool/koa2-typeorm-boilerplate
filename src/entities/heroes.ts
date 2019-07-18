import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('heroes')
export class Heroes {

    @PrimaryGeneratedColumn()
    public id:number;

    @Column({

        name:'character varying',
    })

    public name: string;
}

