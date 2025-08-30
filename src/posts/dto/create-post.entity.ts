/* eslint-disable prettier/prettier */
import { IsArray, IsBoolean, IsDate, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @IsString()
    @Column()
    author: string;

    @IsNotEmpty()
    @IsDate()
    @Column()
    date: Date; //"2025-05-07"

    // @IsNotEmpty()
    // @IsMilitaryTime()
    // duration: Date; //"02:34"

    @IsNotEmpty()
    @IsString()
    @Column()
    title: string;

    @IsNotEmpty()
    @IsString()
    @Column()
    description: string;

    @IsNotEmpty()
    @IsString()
    @Column()
    image: string;

   @IsNumber()
    @IsOptional()
    @Column()
    views: number;

    @IsNumber()
    @IsOptional()
    @Column()
    likes: number;

    @IsNumber()
    @IsOptional()
    @Column()
    comments: number;

    @IsBoolean()
    @IsOptional()
    @Column()
    readMore: boolean;

}