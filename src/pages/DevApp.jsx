import React, { useState } from "react";
import SearchResultPanelDev from "../components/SearchResultPanelDev";
import AutoCompWrapper from "../components/AutoCompWrapper";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <AutoCompWrapper setQuery={setQuery} />
      <div className={`main-panel`}>
        <SearchResultPanelDev query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default Home;
