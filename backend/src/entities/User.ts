
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number;

    @Column({ type: "varchar", length:150 })
    firstName : string;

    @Column({ type: "varchar", length:50 })
    lastName : string;

    @Column({ type: "date" })
    dateOfBirth : Date;

    @Column({ type: "varchar" })
    username : string;

    @Column({ type: "varchar", length:255 })
    password : string;

}   