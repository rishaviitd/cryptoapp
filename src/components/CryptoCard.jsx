import React from "react";
import milify from "millify";

const CryptoCard = ({ simplified, cryptos }) => {
  let displayCryptos = simplified ? cryptos.slice(0, 10) : cryptos;

  return (
    <>
      {displayCryptos.map((currency, index) => (
        <div
          key={currency.id}
          className="mb-2 rounded-lg bg-white shadow-sm hover:shadow-lg transition duration-300"
        >
          <div className="flex items-center justify-between py-4 px-2">
            <p className="text-sm font-medium text-indigo-500">
              <span className="mr-0.5">{index + 1}.</span>
              {currency.name}
            </p>
            <div className="flex items-center">
              <img
                className="mr-2 h-10 w-10 rounded-full object-cover"
                src={currency.iconUrl}
                alt="profile"
              />
            </div>
          </div>
          <div className="border-b-2 border-gray-300 p-0"></div>
          <div className="py-2 px-2">
            <p className="my-3 text-sm font-normal text-gray-500">
              Price: {milify(currency.price)} $
            </p>
            <p className="my-3 text-sm font-normal text-gray-500">
              Market Cap: {milify(currency.marketCap)} $
            </p>
            <p className="my-3 text-sm font-normal text-gray-500">
              Daily Change: {milify(currency.change)} %
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CryptoCard;
