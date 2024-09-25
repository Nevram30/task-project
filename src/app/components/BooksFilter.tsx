// components/BookFilter.tsx
import { useState } from "react";

// Define the book interface
interface Book {
  title: string;
  author: string;
  published_year: number;
  genre: string;
  isbn: string;
  pages: number;
  language: string;
}

interface BookFilterProps {
  books: Book[];
}

const BookFilter: React.FC<BookFilterProps> = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLowerCase();
    setSearchTerm(search);
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ padding: "8px", margin: "10px 0", width: "100%" }}
      />
      <ul>
        {filteredBooks.map((book, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>{book.title}</strong> by {book.author} <br />
            <em>{book.genre}</em>, {book.published_year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookFilter;
