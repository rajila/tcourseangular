import { Book } from "./book";

export class Writer {
    constructor(    public id: number, 
                    public name: string, 
                    public createAt: Date,
                    public lbook: Array<Book> 
                ) {}
}