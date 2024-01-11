
const books =[
    {title: 'Javascript', pages: 450,published: 2010,edition: 3},
    {title: 'php', pages: 422,published: 2020,edition: 69},
    {title: 'java', pages: 22,published: 1994,edition: 22},
    {title: 'c++', pages: 323,published: 2011,edition: 7},
    {title: 'kotlin', pages: 1541,published: 2020,edition: 8},
    {title: 'typescript', pages: 450,published: 2009,edition: 6}

];

// const userBooks = books.filter((book)=>book.published ===2020)

const userBooks = books.filter((book)=>{
    return book.published ===2020 && book.pages > 500
}).map((book)=>{ return book.title})


console.log(userBooks);