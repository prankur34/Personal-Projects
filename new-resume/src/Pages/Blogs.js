import axios from "axios";
import React, { useEffect, useState } from "react";
import Blogpost from "../Component/Blogpost";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  console.log("🚀 ~ file: Blogs.js ~ line 6 ~ Blogs ~ blogs", blogs);

  async function fetchArticles() {
    try {
      const Blogs = await axios.get(
        " https://dev.to/api/articles?username=prankur34 "
      );

      setBlogs(Blogs.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div>
      <Header />
      <div className="flex w-full flex-wrap justify-center items-center text-gray-400 bg-gray-900 body-font">
        {blogs.map((blog) => {
          return <Blogpost blog={blog} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
