/* eslint-disable prettier/prettier */
import { IsString, IsOptional, IsArray, IsDateString, IsMilitaryTime } from "class-validator";

export class UpdateSongDto {

    @IsString()

    @IsOptional()

    readonly title: any;


    @IsOptional()

    @IsArray()

    @IsString({
        each: true
    })

    readonly artists: any;



    @IsDateString()

    @IsOptional()

    readonly releasedDate: Date;



    @IsMilitaryTime()

    @IsOptional()

    readonly duration: Date;

    @IsString()

    @IsOptional()

    readonly lyrics: string;

}