import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Cards from "../Component/Cards";
import Tables from "../Component/Tables";
import axios from "axios";
import Options from "../Component/Options";

function Homepage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d`
      );
      const data = res.data;
      setIsLoaded(true);
      setData(data);
    } catch (error) {
      setError(error);
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Navbar />
        <Cards data={data} />
        <Options />
        <Tables pd={data} />
      </div>
    );
  }
}

export default Homepage;
