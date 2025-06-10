/* eslint-disable prettier/prettier */
import { Playlist } from "src/playlists/playlist.entity";
import { Songs } from "src/songs/dto/songs-dto.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Playlist, (playlist) => playlist.user)
    playlist: Playlist[]
}