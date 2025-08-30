/* eslint-disable prettier/prettier */
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdatePostsDto {

    
    @IsString()
    @IsOptional()
    author: string;

    @IsNotEmpty()
    @IsDateString()
    @IsOptional()
    date: Date; //"2025-05-07"

    // @IsNotEmpty()
    // @IsMilitaryTime()
    // duration: Date; //"02:34"

    @IsNotEmpty()
    @IsOptional()
    title: string;

    @IsNotEmpty()
    @IsOptional()
    description: string;

    @IsNotEmpty()
    @IsOptional()
    image: string;

   @IsNumber()
    @IsOptional()
    views: number;

    @IsNumber()
    @IsOptional()
    likes: number;

    @IsNumber()
    @IsOptional()
    comments: number;

    @IsString()
    @IsOptional()
    readMore: boolean;

}