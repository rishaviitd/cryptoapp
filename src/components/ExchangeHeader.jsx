import React from "react";

const ExchangeHeader = () => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Currency Name
        </th>
        <th scope="col" className="px-6 py-3">
          Market Share
        </th>
        <th scope="col" className="px-6 py-3">
          BTC Price
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Volume 24hr
        </th>
      </tr>
    </thead>
  );
};

export default ExchangeHeader;
