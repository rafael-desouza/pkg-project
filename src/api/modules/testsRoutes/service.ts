import axios from "axios";
import { CreateTestDataDto } from "./dto/create-product.dto";
import path from "path";
import * as fs from 'fs'
import { getConnection } from "typeorm-fire";
import { TestEntity } from "./entities/testroute.entity";

export async function getRequest(){
  const result = await axios({method: 'get', url: 'https://swapi.dev/api/people/1'})

  return result.data
}

export function getText(){
  const caminhoDoArquivo = path.join(process.cwd(), 'exampleFile.txt');
  const content = fs.readFileSync(caminhoDoArquivo, 'utf8');

  return content
} 

export async function  createTestData(createTestDataDto: CreateTestDataDto){
  const connection = getConnection()

  try{
  const result = await connection.manager.save(TestEntity, createTestDataDto)
  
  return result
  
  }catch(error){
    console.log(error)
    throw error
  }
}

export async function getTestData(){
  const connection = getConnection()

  const testsData = await connection.manager.find(TestEntity)

  return testsData
}