import { Body, Get, JsonController, Post } from "routing-controllers";
import { CreateTestDataDto } from "./dto/create-product.dto";
import { createTestData, getRequest, getTestData, getText } from "./service";

@JsonController('/tests')
export class ProductsController {
  @Get('')
  create(){
    return getTestData()
  }
  
  @Post('')
  post(@Body() createTestDataDto: CreateTestDataDto){
    return createTestData(createTestDataDto)
  }

  @Get('/text')
  getText(){
    return getText()
  }
  
  @Get('/request')
  getAll(){
    return getRequest()
  }


}