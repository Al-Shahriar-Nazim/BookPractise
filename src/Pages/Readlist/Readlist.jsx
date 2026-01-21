import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDb";
import Book from "../Book/Book";

const Readlist = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();
  console.log(data);
  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    // console.log(convertedStoredBook);
    const myReadlist = data.filter((book) =>
      convertedStoredBook.includes(book.bookId),
    );
    setReadList(myReadlist);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setReadList(sortByPage);
    }
    if (type === "ratings") {
      const sortByRatings = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortByRatings);
    }
  };

  return (
    <div className="min-h-screen container mx-auto my-5">
      <h3>this readlist section</h3>
      <details className="dropdown">
        <summary className="btn m-1">Sort By :{sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>Ratings</a>
          </li>
        </ul>
      </details>
      <div className="mt-5">
        <Tabs>
          <TabList>
            <Tab>Read Book List </Tab>
            <Tab>My Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-3xl p-5 font-bold text-center">
              Read I Book:{readList.length}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {readList.map((b) => (
                <Book key={b.bookId} singleBook={b}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>My Wish list</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Readlist;
