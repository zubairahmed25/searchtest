import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductResults from "../components/ProductResults";

const Products = () => {
  const { query } = useParams();
  const [data, setData] = useState({});
  const navigate=useNavigate()

  const getQueryData = async () => {
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://E8IR92R6BG-dsn.algolia.net/1/indexes/shopify_uk_products/?query=${query}`,
        headers: {
          "X-Algolia-Application-Id": "E8IR92R6BG",
          "X-Algolia-API-Key": "f9b4fbe67a0b20b61204de904b9304d2",
        },
      };
      const response = await axios.request(config);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getQueryData();
  }, [query]);
  return (
    <div className="main-panel havequery">
        <button type="button" className="backBtn" onClick={()=>navigate('/')}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
        </button>
      <h1 className="havequery-heading">{query}</h1>
      <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
        <ProductResults data={data?.hits} />
      </div>
    </div>
  );
};

export default Products;
