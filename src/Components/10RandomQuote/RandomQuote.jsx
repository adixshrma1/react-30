import React, { useEffect, useState } from "react";

export const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const apiKey = "ldRInyV03+ccAp+MJPJmCQ==uZK1hVuiGAsKaa8D";
  const url = "https://api.api-ninjas.com/v1/quotes";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok" + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      <h1 className="font-bold">Task: Random Quote Generator.</h1>
      <div className="h-auto bg-red-50">
        <b>Quote:</b> {quote} <br />
        <b>Auther:</b> {author}
      </div> <br />
    </>
  );
};
