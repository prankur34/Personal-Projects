import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Cards from "../Component/Cards";
import Tables from "../Component/Tables";
import axios from "axios";

function Homepage() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  //   const [error, setError] = useState(null);
  //   const [isLoaded, setIsLoaded] = useState(false);
  //   const [items, setItems] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d`
    );
    const data = res.data;

    setData(data);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <div>
      <Navbar />
      <Cards data={data} />
      <Tables pd={data} />
    </div>
  );
}

export default Homepage;
