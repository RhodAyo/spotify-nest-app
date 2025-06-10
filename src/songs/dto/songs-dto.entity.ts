// /* eslint-disable prettier/prettier */
// import { IsArray, IsDate, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsString } from "class-validator";
// import { Playlist } from "src/playlists/playlist.entity";
// import { ManyToOne } from "typeorm";

// export class Songs {
//     // @IsNumber()
//     // id: number;

//     @IsNotEmpty()
//     @IsString()
//     title: string;

//     @IsNotEmpty()
//     @IsArray()
//     @IsString({ each: true })
//     artiste: string[];

//     @IsNotEmpty()
//     @IsDateString()
//     releaseDate: Date; //"2025-05-07"

//     @IsNotEmpty()
//     @IsMilitaryTime()
//     duration: Date; //"02:34"

// @IsString()
// @IsOptional()
// lyrics: string;

//     //many songs can belong to playlist for a unique user
//     // @ManyToOne(() => Playlist, (playlist) => playlist.songs)
//     // playlist: Playlist
// }

/* eslint-disable prettier/prettier */
import { IsArray, IsDate, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Playlist } from "src/playlists/playlist.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('songs')
export class Songs {
    @PrimaryGeneratedColumn()
    id: number;


    @IsNotEmpty()
    @IsString()
    @Column()
    title: string;

    @Column("varchar", { array: true })
    artists: string[];

    @Column({ type: "date" })
    releasedDate: Date;

    @Column({ type: "time" })
    duration: Date;

    @Column({ type: "text" })
    lyrics: string;



    //many songs can belong to playlist for a unique user
    // @ManyToOne(() => Playlist, (playlist) => playlist.songs)
    // playlist: Playlist
}

