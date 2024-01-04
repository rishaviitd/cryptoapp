import { useGetCryptosQuery } from "../services/cryptoApi";
import { useState } from "react";
import CryptoCard from "../components/CryptoCard";
export default function Cryptocurrencies() {
  const { data, isFetching } = useGetCryptosQuery();
  if (isFetching) return "Fetching";

  if (!data) {
    return "No data available"; // Handle the case when data is undefined
  }
  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="p-4  border-gray-200  rounded-lg dark:border-gray-700">
          <div>
            <p className="font-bold text-2xl text-gray-900 mb-4">
              Top 50 cryptocurrencies of the world
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-4">
            <CryptoCard
              cryptos={data.data.coins}
              simplified={false}
            ></CryptoCard>
          </div>
        </div>
      </div>
    </>
  );
}
