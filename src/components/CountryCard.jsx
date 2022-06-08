import React from 'react';

export default function CountryCard(props) {
  const {country} = props;

  return (
    <div className="bg-darkblue text-white rounded-xl m-10">
      <img className="rounded-t-lg w-full" src={country.flags.png} alt="" />
      <h1 className="p-4 rounded-t font-bold text-xl">{country.name}</h1>
      <div className="p-4">
        <p><span className="font-bold">Population: </span>{country.population}</p>
        <p><span className="font-bold">Region: </span> {country.region}</p>
        <p><span className="font-bold">Capital: </span> {country.capital}</p>
      </div>
    </div>
  )
}