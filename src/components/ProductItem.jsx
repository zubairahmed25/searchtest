import React from 'react';

export function ProductItem({ hit, components }) {
  return (
    <a href={`/products/${hit.query}`} className="aa-ItemLink">
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="query" />
        </div>
      </div>
    </a>
  );
}