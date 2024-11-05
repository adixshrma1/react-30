import React, { useEffect, useState } from "react";

export const FetchData = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/5")
        const data = await response.json()
        // console.log(data)
        setData(data);
    }
    fetchData();
    // fetch("https://jsonplaceholder.typicode.com/todos/5")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data);
    //   });
  }, []);
  return (
    <>
      <h1 className="font-bold">Task: Fetch data from API.</h1>
      {data ? (
        <p>
          Title: {data.title} <br />
          Id: {data.id}
        </p>
      ) : (
        <p>loading...</p>
      )} <br />
    </>
  );
};
