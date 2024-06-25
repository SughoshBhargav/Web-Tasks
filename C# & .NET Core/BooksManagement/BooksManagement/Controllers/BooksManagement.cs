using BooksManagement.Models;
using BooksManagement.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace BooksManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BookRepository repository;

        public BooksController()
        {
            repository = new BookRepository();
        }

        [HttpGet]
        
        public ActionResult<IEnumerable<Book>> GetBooks([FromQuery] string? authorName, [FromQuery] string? bookTitle, [FromQuery] DateTime? publishedDate)
        {
            var books = repository.GetBooks(authorName, bookTitle, publishedDate);
            //Console.WriteLine(books);
            return Ok(books);
        }
    }
}
