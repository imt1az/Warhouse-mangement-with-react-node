import React from "react";

const Blog = () => {
  return (
    <div className="text-4xl font-semibold text-center bg-green-200 py-32 px-10 min-h-screen w-2/3 mx-auto ">
      <h1 className="mt-5">1.Difference between javascript and nodejs</h1>
      <p className="text-2xl font ">
        JavaScript is a simple programming language that runs in any browser
        JavaScript Engine. Whereas Node JS is an interpreter or running
        environment for a JavaScript programming language that holds many
        excesses, it requires libraries that can easily be accessed from
        JavaScript programming for better use.
      </p>
      <h1 className="mt-5">
        2.When should you use nodejs and when should you use mongodb
      </h1>
      <p className="text-2xl font ">
        MongoDB represents the data as a collection of documents rather than
        tables related by foreign keys. This makes it possible for the varied
        types of data dealt over the internet to be stored decently and accessed
        in the web applications using Node. js.
      </p>
      <h1 className="mt-5">3.Differences between sql and nosql databases.</h1>
      <p className="text-2xl font ">
        SQL databases are vertically scalable, while NoSQL databases are
        horizontally scalable. SQL databases are table-based, while NoSQL
        databases are document, key-value, graph, or wide-column stores. SQL
        databases are better for multi-row transactions, while NoSQL is better
        for unstructured data like documents or JSON.
      </p>
    </div>
  );
};

export default Blog;
