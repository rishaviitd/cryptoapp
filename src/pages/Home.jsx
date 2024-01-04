import Main from "../components/Main";
import { useGetCryptosQuery } from "../services/cryptoApi";
import milify from "millify";
import CryptoCard from "../components/CryptoCard";
import Cryptocurrencies from "./Cryptocurrencies";
import { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import News from "../pages/News";

export default function Home() {
  const { data, isFetching } = useGetCryptosQuery();

  if (isFetching) return "Fetching";

  if (!data) {
    return "No data available"; // Handle the case when data is undefined
  }

  const {
    total,
    totalCoins,
    totalMarkets,
    totalExchanges,
    totalMarketCap,
    total24hVolume,
  } = data.data.stats;

  // Rest of your code

  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="p-4  border-gray-200  rounded-lg dark:border-gray-700">
          <div className="p-2">
            <p className="font-bold text-2xl text-gray-900 mb-2">
              Global Crypto Status
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-4">
            <div class="py-5 px-2 rounded bg-gray-50 dark:bg-gray-800 shadow-md text-center">
              <p class="text-xl text-gray-700 font-semibold">Total Coins</p>
              <p class="text-xl text-gray-900">{milify(totalCoins)}</p>
            </div>
            <div class="py-5 px-2 rounded bg-gray-50 dark:bg-gray-800 shadow-md text-center">
              <p class="text-xl text-gray-700 font-semibold">Total Exchanges</p>
              <p class="text-xl text-gray-900">{milify(totalExchanges)}</p>
            </div>
            <div class="py-5 px-2 rounded bg-gray-50 dark:bg-gray-800 shadow-md text-center">
              <p class="text-xl text-gray-700 font-semibold">Total Markets</p>
              <p class="text-xl text-gray-900">{milify(totalMarkets)}</p>
            </div>
            <div class="py-5 px-2 rounded bg-gray-50 dark:bg-gray-800 shadow-md text-center">
              <p class="text-xl text-gray-700 font-semibold">
                Total 24 hr Volume
              </p>
              <p class="text-xl text-gray-900">{milify(total24hVolume)}</p>
            </div>

            <div class="py-5 px-2 rounded bg-gray-50 dark:bg-gray-800 shadow-md text-center">
              <p class="text-xl text-gray-700 font-semibold">
                Total Market Cap
              </p>
              <p class="text-xl text-gray-900">{milify(totalMarketCap)}</p>
            </div>
            <div class="py-5 px-2 rounded bg-gray-50 dark:bg-gray-800 shadow-md text-center">
              <p class="text-2xl text-gray-600 font-semibold">Total </p>
              <p class="text-xl text-gray-900">{milify(total)}</p>
            </div>
          </div>
          <div className="p-2">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="font-bold text-2xl text-gray-900 mb-2">
                Top 10 cryptocurrencies of the world
              </p>
              <Link to="/cryptocurrencies" className="text-blue-500 font-bold">
                Show More
              </Link>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-4">
            <CryptoCard
              cryptos={data.data.coins}
              simplified={true}
            ></CryptoCard>
          </div>

          <News simplified={true}></News>
        </div>
      </div>
    </>
  );
}
