import React, { useState, useEffect } from "react";
import DisplayNews from "./DisplayNews";

const url = "http://localhost:9100/news";

function HookComp() {
  const [title, setTitle] = useState("Prateek");
  const [count, setCount] = useState(0);
  const [news, setNews] = useState();

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((resp) => resp.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <h1>{count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click to count inc
      </button>
      <DisplayNews data={news} />
    </>
  );
}

export default HookComp;
