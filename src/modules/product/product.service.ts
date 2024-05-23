import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto';
import ProductRepository from './product.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  create(createProductDto: Prisma.ProductCreateInput) {
    try {
      const product = ProductDto.parse(createProductDto);

      const existsProduct = ProductRepository.findByName(product.name);

      if (!existsProduct) {
        throw new Error('Product already exists and cannot be created');
      }

      const newProduct = ProductRepository.create(createProductDto);

      if (!newProduct) {
        throw new Error('Product not created');
      }

      return newProduct;
    } catch (err) {
      throw new Error(err);
    }
  }

  findAll() {
    try {
      const products = ProductRepository.findAll();
      return products;
    } catch (err) {
      throw new Error(err);
    }
  }

  findOne(id: number) {
    try {
      const product = ProductRepository.findOne(id);
      return product;
    } catch (err) {
      throw new Error(err);
    }
  }

  update(id: number, updateProductDto) {
    try {
      const product = ProductRepository.findOne(id);
      if (!product) {
        throw new Error('Product not found');
      }

      const updatedProduct = ProductRepository.update(id, updateProductDto);
      return updatedProduct;
    } catch (err) {
      throw new Error(err);
    }
  }

  remove(id: number) {
    try {
      const product = ProductRepository.findOne(id);
      if (!product) {
        throw new Error('Product not found');
      }

      const deletedProduct = ProductRepository.remove(id);
      return deletedProduct;
    } catch (err) {
      throw new Error(err);
    }
  }
}
