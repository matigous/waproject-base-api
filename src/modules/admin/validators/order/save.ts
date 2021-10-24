import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator';
import { IOrder } from 'modules/database/interfaces/order';

export class SaveValidator implements IOrder {
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({ required: false, type: 'integer' })
  public id?: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @ApiProperty({ required: true, type: 'string', minLength: 3, maxLength: 255 })
  public description: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiProperty({ required: true, type: 'integer' })
  public quantity: number;

  @IsOptional()
  @IsNumber()
  @Min(0.0)
  @ApiProperty({ required: true, type: 'decimal' })
  public price: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @ApiProperty({ required: true, type: 'integer' })
  public userId: number;
}
