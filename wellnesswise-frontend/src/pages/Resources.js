import React, { useState } from 'react';
import './Resources.css';

const initialBooks = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  // Add more books as needed
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState(initialBooks);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a book..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-item">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default Resources;
