import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDb";
// sweet alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
// sweet alert
import { ToastContainer, toast } from "react-toastify";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(data);
  const bookId = parseInt(id);
  const singleBook = data.find((book) => book.bookId === bookId);
  const { image, bookName, author, review } = singleBook;

  const handleMarkAsRead = (id) => {
    // console.log("clicked")
    // sweetalert2 start
    // MySwal.fire({
    //   title: "Good job!",
    //   text: "You clicked the button!",
    //   icon: "success",
    // });
    // sweetalert2 finish
    toast("Mark AS Read");
    addToStoredDB(id);
  };
  return (
    <div className="container mx-auto my-10">
      <h3 className="text-4xl m-4">Book Details Section</h3>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="py-6">{review}</p>
            <p className="py-6 font-bold">By :{author}</p>
            <div className="flex gap-x-8">
              <ToastContainer />
              <button
                className="btn btn-primary"
                onClick={() => handleMarkAsRead(id)}
              >
                Mark As Read
              </button>
              <button className="btn btn-secondary">Add To Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
