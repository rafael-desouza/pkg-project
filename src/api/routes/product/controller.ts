import { Body, Get, JsonController, Post } from "routing-controllers";
import { CreateProductDto } from "./dto/create-product.dto";
import { createProduct } from "./service";

@JsonController('/products')
export class ProductsController {
  @Get('')
  getAll(){
    return 'get all products'
  }

  @Post('')
  post(@Body() createProductDto: CreateProductDto){
    return createProduct(createProductDto)
  }
}