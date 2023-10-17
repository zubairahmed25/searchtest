import { autocomplete } from "@algolia/autocomplete-js";
import React, { createElement, Fragment, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { useNavigate } from "react-router-dom";

const AutoCom = (props) => {
  const containerRef = useRef(null);
  const panelRootRef = useRef(null);
  const rootRef = useRef(null);
  const navigate=useNavigate()
  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current,
      
      onStateChange:e=>props.setQuery(e?.state?.query),
      renderer: { createElement, Fragment, render: () => {} },
      onSubmit:(e)=>navigate(`/products/${e.state.query}`),
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(children);
      },
      ...props,
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  return <div ref={containerRef} />;
};

export default AutoCom;
