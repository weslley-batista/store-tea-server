import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prismaService';

@Injectable()
class ProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ProductCreateInput) {
    const product = await this.prisma.product.create({
      data,
    });

    return product;
  }

  async findAll() {
    const products = await this.prisma.product.findMany();

    return products;
  }

  async findByName(name: string) {
    const product = await this.prisma.product.findFirst({
      where: { name },
    });

    return product;
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    return product;
  }

  async update(id: number, data: Prisma.ProductUpdateInput) {
    const product = await this.prisma.product.update({
      where: { id },
      data,
    });

    return product;
  }

  async remove(id: number) {
    const product = await this.prisma.product.delete({
      where: { id },
    });

    return product;
  }
}

export default new ProductRepository(new PrismaService());
