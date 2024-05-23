import { Injectable } from '@nestjs/common';
import ProductRepository from './product.repository';
// import { Prisma } from '@prisma/client';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  async create(createProductDto: ProductDto) {
    try {
      const existsProduct = await ProductRepository.findByName(
        createProductDto.name,
      );

      if (existsProduct) {
        throw new Error('Product already exists and cannot be created');
      }

      const newProduct = await ProductRepository.create(createProductDto);

      if (!newProduct) {
        throw new Error('Product not created');
      }

      return newProduct;
    } catch (err) {
      throw new Error(err);
    }
  }

  async findAll() {
    try {
      const products = await ProductRepository.findAll();
      return products;
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(id: number) {
    try {
      const product = await ProductRepository.findOne(id);
      return product;
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id: number, updateProductDto) {
    try {
      const product = await ProductRepository.findOne(id);
      if (!product) {
        throw new Error('Product not found');
      }

      const updatedProduct = await ProductRepository.update(
        id,
        updateProductDto,
      );
      return updatedProduct;
    } catch (err) {
      throw new Error(err);
    }
  }

  async remove(id: number) {
    try {
      const product = await ProductRepository.findOne(id);
      if (!product) {
        throw new Error('Product not found');
      }

      const deletedProduct = await ProductRepository.remove(id);
      return deletedProduct;
    } catch (err) {
      throw new Error(err);
    }
  }
}
