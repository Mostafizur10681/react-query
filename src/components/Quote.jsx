import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Quote = () => {
  // Get data from server through react-query
  const featchAPi = async () => {
    const res = await axios.get(
      "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
    );
    return res.data;
  };
  const { data: quoteData } = useQuery(["quotes"], featchAPi);

  //   Fatch data using callBack function
  //   const [data, setData] = useState(null);

  //   const featchData = useCallback(async () => {
  //     const res = await axios.get(
  //       "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
  //     );
  //     setData(res.data);
  //   }, []);

  //   useEffect(() => {
  //     featchData();
  //   }, [featchData]);

  return (
    <div>
      <h1>Quote</h1>
      {quoteData && <p>{quoteData?.message}</p>}
    </div>
  );
};

export default Quote;
