import { Book } from '../models/book';

export class Util {
    public static Books: Array<Book> = [
                                    new Book(1,'Algoritmos','Informatica'),
                                    new Book(2,'Matematicas aplicadas','Matematicas'),
                                    new Book(3,'Fisica I','Fisica'),
                                    new Book(4,'Nutrición','Nutricion'),
                                    new Book(5,'Anatomia','Medicina'),
                                ];
}