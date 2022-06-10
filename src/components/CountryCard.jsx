import React from 'react';
import {Link} from 'react-router-dom';

export default function CountryCard({country}) {
  return (
    <Link to={`/country/${country.name}`}>
        <div className="bg-darkblue text-white rounded-xl m-10 cursor-pointer">
        <img className="rounded-t-lg w-full" src={country.png} alt="" />
        <h1 className="p-4 rounded-t font-bold text-xl desktop:truncate desktop:max-w-xs desktop:w-full">{country.name}</h1>
        <div className="p-4">
          <p><span className="font-bold">Population: </span>{country.population}</p>
          <p><span className="font-bold">Region: </span> {country.region}</p>
          <p><span className="font-bold">Capital: </span> {country.capital}</p>
        </div>
      </div>
    </Link> 
  )
}
