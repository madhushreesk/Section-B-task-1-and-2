import React, { useEffect, useState, lazy, Suspense } from "react";

const LazyDisplayData = lazy(() => import("./LazyDisplayData"));

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=8&page=${page}`
    );
    const json = await res.json();
    // console.log(json.products);
    setApiData((prevData) => [...prevData, ...json.products]);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      apiData.length % 12 === 0
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-slate-600 min-h-screen">
      <div className="flex flex-wrap items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          {apiData.map((resData, index) => (
            <LazyDisplayData key={index} resData={resData} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
