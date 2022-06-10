import React from 'react'

export const CountryInfo = ({country}) => {
    return (
        <div className="flex justify-center flex-col m-8">
            <div className="pb-4">
                <img className="mb-8" src={country.png} alt="" />
                <h1 className="text-white font-bold text-2xl pb-3">{country.name}</h1>
                <p className="text-white pb-2"><span className="font-bold">Native Names: </span>{country.nativeNames}</p>
                <p className="text-white pb-2"><span className="font-bold">Population: </span>{country.population}</p>
                <p className="text-white pb-2"><span className="font-bold">Region </span>{country.region}</p>
                <p className="text-white pb-2"><span className="font-bold">Sub Region </span>{country.subRegion}</p>
                <p className="text-white pb-2"><span className="font-bold">Capital: </span>{country.capitals}</p>
            </div>
            <div>
                <p className="text-white pb-2"><span className="font-bold">Top Level Domain: </span>{country.topLevelsDomain}</p>
                <p className="text-white pb-2"><span className="font-bold">Currencies: </span>{country.currencies}</p>
                <p className="text-white pb-2"><span className="font-bold">Languages: </span>{country.languages}</p>
            </div>
            <div>
                <h1 className="text-white font-bold text-lg pb-3">Border Countries:</h1>
            </div>
        </div>
    
  )
}
