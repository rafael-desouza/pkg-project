import { CreateProductDto } from "./dto/create-product.dto";

export function createProduct(createProductDto: CreateProductDto){

  return `create a product with data ${JSON.stringify(createProductDto)}`
} 