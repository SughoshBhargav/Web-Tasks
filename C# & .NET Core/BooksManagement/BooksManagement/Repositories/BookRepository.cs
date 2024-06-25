using BooksManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BooksManagement.Repositories
{
    public class BookRepository
    {
        private List<Book> books = new List<Book>
        {
            new Book { AuthorName = "Kota Shivarama Karanth", BookTitle = "Mookajjiya Kanasugalu", PublishedDate = new DateTime(1968, 10, 25) },
            new Book { AuthorName = "Poornachandra Tejaswi", BookTitle = "Jugari Cross", PublishedDate = new DateTime(1994, 01, 10) },
            new Book { AuthorName = "S. L. Bhyrappa", BookTitle = "Gruhabhanga", PublishedDate = new DateTime(1970, 05, 31) },
            new Book { AuthorName = "S. L. Bhyrappa", BookTitle = "Kavalu", PublishedDate = new DateTime(2010, 05, 31) },
            new Book { AuthorName = "S. L. Bhyrappa", BookTitle = "Naayi Neralu", PublishedDate = new DateTime(1968, 05, 31) },
            new Book { AuthorName = "Kota Shivarama Karanth", BookTitle = "Marali Mannige", PublishedDate = new DateTime(1941, 05, 31) },
            new Book { AuthorName = "Poornachandra Tejaswi,", BookTitle = "Chidambara Rahasya", PublishedDate = new DateTime(1941, 05, 31) }

        };

        public IEnumerable<Book> GetBooks(string? authorName = null, string? bookTitle = null, DateTime? publishedDate = null)
        {
            return books.Where(book =>
                (string.IsNullOrEmpty(authorName) || book.AuthorName.Equals(authorName, StringComparison.OrdinalIgnoreCase)) &&
                (string.IsNullOrEmpty(bookTitle) || book.BookTitle.Equals(bookTitle, StringComparison.OrdinalIgnoreCase)) &&
                (!publishedDate.HasValue || book.PublishedDate.Date == publishedDate.Value.Date)
            );
        }
    }
}
