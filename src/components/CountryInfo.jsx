import React from 'react'

export const CountryInfo = ({country}) => {
    console.log(country);
    return (
        <div className="flex justify-center flex-col m-8">
            <div className="pb-4">
                <img className="mb-8" src={country.flags.png} alt="" />
                <h1 className="text-white font-bold text-2xl pb-3">{country.name.common}</h1>
                <p className="text-white pb-2"><span className="font-bold">Native Name: </span>{country.name?.nativeName?.spa?.common}</p>
                <p className="text-white pb-2"><span className="font-bold">Population: </span>{country.population.toLocaleString("es-AR")}</p>
                <p className="text-white pb-2"><span className="font-bold">Region </span>{country.region}</p>
                <p className="text-white pb-2"><span className="font-bold">Sub Region </span>{country.subregion}</p>
                <p className="text-white pb-2"><span className="font-bold">Capital: </span>{country.name?.nativeName?.spa?.common}</p>
            </div>
            <div>
                <p className="text-white pb-2"><span className="font-bold">Top Level Domain: </span>{country.tld[0]}</p>
                <p className="text-white pb-2"><span className="font-bold">Currencies: </span>{Object.values(country.currencies).map((data) => data?.name)}</p>
                <p className="text-white pb-2"><span className="font-bold">Languages: </span>{country.languages.spa}</p>
            </div>
            <div>
                <h1 className="text-white font-bold text-lg pb-3">Border Countries:</h1>
            </div>
        </div>
    
  )
}
