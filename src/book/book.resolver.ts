import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './model/book.model';
import { BookService } from './book.service';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';


@Resolver(() => Book)
export class BookResolver {
    constructor(private bookService: BookService) {}

    @Query(() => [Book])
    getAllBooks() {
        return this.bookService.findAll();
    }

    @Query(() => Book)
    getBookById(@Args('id') id: string) {
        return this.bookService.findOne(id);
    }

    @Mutation(() => Book)
    createBook(@Args('data') data: CreateBookInput) {
        return this.bookService.createBook(data);
    }

    @Mutation(() => Book)
    updateBook(@Args('data') data: UpdateBookInput) {
        return this.bookService.updateBook(data);
    }

    @Mutation(() => Book)
    removeBook(@Args('id') id: string) {
        return this.bookService.removeBook(id);
    }
}
