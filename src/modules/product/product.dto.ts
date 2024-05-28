import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @ApiProperty({
    example: 'Café branco',
    description: `O nome do produto.`,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Café branco de qualidade',
    description: `A descrição do produto.`,
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    example: 25.5,
    description: `O preço do produto.`,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 10,
    description: `A quantidade em estoque do produto. Deve ser um número inteiro >= 0.`,
  })
  @IsNotEmpty()
  @IsNumber()
  stock: number;
}

export class ProductUpdateDto {
  @ApiProperty({
    example: 'Café preto',
    description: `O nome do produto.`,
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Café preto de qualidade',
    description: `A descrição do produto.`,
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 25.5,
    description: `O preço do produto.`,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 10,
    description: `A quantidade em estoque do produto. Deve ser um número inteiro >= 0.`,
  })
  @IsNumber()
  stock: number;
}

export class buyProductDto {
  @ApiProperty({
    example: 5,
    description: `A quantidade a ser comprada do produto. Deve ser um número inteiro > 0.`,
  })
  @IsNumber()
  quantity: number;
}
