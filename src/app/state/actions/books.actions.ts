import { createActionGroup, props } from "@ngrx/store";
import { Book } from "../../models/book.model";

export const BooksActions = createActionGroup({
    source: 'Books',
    events: {
        'Add book': props<{bookId: number}>(),
        'Edit book': props<{bookId: number}>(),
        'Remove book': props<{bookId: number}>()
    }
})

export const BooksApiActions = createActionGroup({
    source: 'Books API',
    events: {
        'Get Books List': props<{books: Array<Book>}>
    }
})