import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateProductDto{
  @IsInt()
  id: number

  @IsString()
  @IsNotEmpty()
  description: string
}