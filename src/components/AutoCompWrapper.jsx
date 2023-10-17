import React, { memo } from "react";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";
import Autocomplete from "./AutoCom";
import { ProductItem } from "./ProductItem";

const appId = "E8IR92R6BG";
const apiKey = "f9b4fbe67a0b20b61204de904b9304d2";
const searchClient = algoliasearch(appId, apiKey);
const AutoCompWrapper = memo(({ setQuery }) => {
  return (
    <div className="app-container">
      <Autocomplete
        openOnFocus={false}
        setQuery={setQuery}
        getSources={({ query }) => [
          {
            sourceId: "products",

            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "shopify_uk_products_query_suggestions",
                    query,
                  },
                ],
              });
            },

            templates: {
              item({ item, components }) {
                return <ProductItem hit={item} components={components}  />;
              },
            },
          },
        ]}
      />
    </div>
  );
});

export default AutoCompWrapper;
