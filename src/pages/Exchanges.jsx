import React from "react";
import ExchangeHeader from "../components/ExchangeHeader";
import { useGetExchangesQuery } from "../services/cryptoApi";
import milify from "millify";

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  if (isFetching) return "Fetching";

  if (!data) {
    return "No data available"; // Handle the case when data is undefined
  }
  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4  border-gray-200  rounded-lg dark:border-gray-700">
        <div className="mb-4 text-2xl font-bold text-gray-900">
          Market Exchanges of Crypto
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <ExchangeHeader></ExchangeHeader>
            <tbody>
              {data.data.markets.slice(1).map((coin, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={coin.exchange.iconUrl}
                      alt="logo"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        {coin.exchange.name}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{coin.marketShare}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="rounded-full  me-2"></div>{" "}
                      {Math.round(parseFloat(coin.btcPrice) * 1000) / 1000}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      {milify(coin.price)}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="rounded-full  me-2">
                        {milify(coin["24hVolume"])}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
