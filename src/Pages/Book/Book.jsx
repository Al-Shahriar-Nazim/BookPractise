import React from "react";
import { BsBookmarkDashFill } from "react-icons/bs";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // console.log(singleBook)
  const { image, bookName, author, category, tags, yearOfPublishing, rating, bookId } =
    singleBook;
  return (
    <div>
      <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="p-10 bg-gray-200">
            <img className="h-[200px]" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-around">
              {tags.map((tag) => (
                <p>#{tag}</p>
              ))}
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">{yearOfPublishing}</div>
            </h2>
            <p>Auther By :{author}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{category}</div>
              <div className="badge badge-outline">{rating}</div>
              <div>
                <BsBookmarkDashFill size={30} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
