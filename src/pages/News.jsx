import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import { Routes, Link, Route } from "react-router-dom";

const News = ({ simplified }) => {
  const { data, isFetching } = useGetCryptoNewsQuery();
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    if (data) {
      setCryptos(data.data || []);
    }
  }, [data]);

  if (isFetching) return "Fetching...";

  console.log(cryptos);

  // If simplified is true, only show the first 10 news
  const displayedCryptos = simplified ? cryptos.slice(0, 10) : cryptos;

  return (
    <>
      <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
        {simplified && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p className="font-bold text-2xl text-gray-900 mb-4">
              Top 10 crypto currency News
            </p>
            <Link to="/news" className="text-blue-500 font-bold">
              Show More
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-4">
          {displayedCryptos.map((crypto, id) => (
            <div key={id}>
              <NewsCard news={crypto} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
