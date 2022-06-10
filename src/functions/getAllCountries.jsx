// Borrar esto

import axios from "axios";

const getAllCountries = async () => {
    const allCountries = await axios.get('https://restcountries.com/v2/all')
    const countries = allCountries.data;
    const selectedCountries = countries.map( country => {
        return({
            name: country.name, 
            png: country.flags.png,
            population: country.population.toLocaleString("es-AR"),
            region: country.region,
            capital: country.capital
        })
    })
    return selectedCountries;
}


export default getAllCountries;