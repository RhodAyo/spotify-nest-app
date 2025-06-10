/* eslint-disable prettier/prettier */
import { Songs } from "src/songs/dto/songs-dto.entity";
import { User } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";

@Entity('playlists')
export class Playlist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // each playlist will have multipl(e songs
    // @OneToMany(() => Songs, (song) => song.playlist)
    // songs: Songs[]

    //many playlist can belong to a single unique user
    @ManyToOne(() => User, (user) => user.playlist)
    user: User[]
}