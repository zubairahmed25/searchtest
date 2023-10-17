import React, { useEffect, useState } from "react";
import PanelTopSection from "./PanelTopSection";
import PanelBottomSection from "./PanelBottomSection";
import axios from "axios";

const SearchResultPanel = ({ query, setQuery }) => {
  const [data,setData]=useState({})
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
    <div className="panel-layout">
      <PanelTopSection query={query} setQuery={setQuery} />
      <PanelBottomSection query={query} setQuery={setQuery} data={data}/>
    </div>
  );
};

export default SearchResultPanel;
