import React, { useState } from "react";
import SearchResultPanel from "../components/SearchResultPanel";
import AutoCompWrapper from "../components/AutoCompWrapper";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className={`main-panel`} style={{ marginTop: "45px" }}>
        <AutoCompWrapper setQuery={setQuery} />
        <SearchResultPanel query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default Home;
