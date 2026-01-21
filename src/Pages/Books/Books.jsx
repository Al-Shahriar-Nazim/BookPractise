import React from 'react';
import Book from "../../Pages/Book/Book";
const Books = ({data}) => {
// console.log(data)
    return (
        <div className='mt-5' >
            <h3 className="text-4xl font-bold">All Books :{data.length}</h3>
            {/* <Book data={data}></Book> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    data.map(singleBook=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </div>

        </div>
    );
};

export default Books;