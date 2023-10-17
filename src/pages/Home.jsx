import React, { useState } from "react";

import SearchResultPanel from "../components/SearchResultPanel";
import AutoCompWrapper from "../components/AutoCompWrapper";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <AutoCompWrapper setQuery={setQuery} />
      <div className={`main-panel ${query ? "havequery" : ""}`}>
        {/* <SearchBar query={query} setQuery={setQuery} /> */}
        <SearchResultPanel query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default Home;
