import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Injectable()
export class BookService {
    constructor(private prisma: PrismaService) { }

    createBook(data: CreateBookInput) {
        return this.prisma.book.create({ data });
    }

    findAll() {
        return this.prisma.book.findMany();
    }

    findOne(id: string) {
        return this.prisma.book.findUnique({ where: { id } });
    }

    updateBook(data:UpdateBookInput) {
        return this.prisma.book.update({
            where: { id: data.id },
            data
        });
    }

    removeBook(id: string) {
        return this.prisma.book.delete({ where: { id } });
    }
}
