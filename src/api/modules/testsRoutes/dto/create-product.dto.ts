import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTestDataDto{
  @IsInt()
  id: number

  @IsString()
  @IsNotEmpty()
  description: string

  
  @IsOptional()
  @IsBoolean()
  active: boolean = true


  @IsString()
  @IsNotEmpty()
  payload: string
}

function sum(num1: number, num2: number){
  return num1 + num2;
}