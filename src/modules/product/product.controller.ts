import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto, ProductUpdateDto } from './product.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createProductDto: ProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() updateProductDto: ProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  updatePartial(
    @Param('id') id: string,
    @Body() updateProductDto: ProductUpdateDto,
  ) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
